// Build schemas from the same Markdown that renders the article. The MDX loader
// exports this frontMatter object after remark runs, for SSR and client routing.
function text(node) {
  if (node.type === 'text' || node.type === 'inlineCode') return node.value;
  if (node.type === 'break') return ' ';
  if (!node.children) return '';
  const separator = ['list', 'listItem', 'blockquote', 'table', 'tableRow'].includes(node.type) ? ' ' : '';
  return node.children.map(text).join(separator);
}

function instructions(nodes) {
  return nodes.filter(node => ['paragraph', 'list', 'blockquote', 'table'].includes(node.type))
    .map(text).filter(Boolean).join(' ').trim();
}

function isClosingLink(node) {
  return node.type === 'paragraph' && node.children.some(child => child.type === 'link') &&
    node.children.every(child => child.type === 'link' ||
      (child.type === 'text' && /^[\s.!]*$/.test(child.value)));
}

function isLegacyFAQScript(node) {
  return node.type === 'mdxJsxFlowElement' && node.name === 'script' &&
    node.attributes.some(attribute => attribute.name === 'type' &&
      attribute.value === 'application/ld+json') &&
    node.attributes.some(attribute => attribute.name === 'dangerouslySetInnerHTML' &&
      /JSON\.stringify\(faqSchema\)/.test(attribute.value?.value ?? ''));
}

module.exports = function articleSchema() {
  return (tree, file) => {
    const nodes = tree.children;
    const faqStart = nodes.findIndex(node => node.type === 'heading' &&
      node.depth === 2 && /^frequently asked questions$/i.test(text(node).trim()));
    const questions = [];
    if (faqStart !== -1) {
      for (let i = faqStart + 1; i < nodes.length; i++) {
        const node = nodes[i];
        if (node.type !== 'heading') continue;
        if (node.depth <= 2) break;
        if (node.depth !== 3) continue;
        const end = nodes.findIndex((next, j) => j > i && next.type === 'heading');
        const answerNodes = nodes.slice(i + 1, end === -1 ? undefined : end);
        // A standalone closing CTA and everything after it belong to the article.
        const closing = answerNodes.findIndex((next, index) => index > 0 && isClosingLink(next));
        const answer = instructions(answerNodes.slice(0, closing === -1 ? undefined : closing));
        if (!answer) {
          throw new Error(`FAQ question has no answer: ${text(node)}`);
        }
        questions.push({
          '@type': 'Question',
          name: text(node).trim(),
          acceptedAnswer: {'@type': 'Answer', text: answer},
        });
      }
    }

    const steps = [];
    for (let i = 0; i < nodes.length; i++) {
      const node = nodes[i];
      if (node.type !== 'heading' || node.depth !== 2) continue;
      const match = /^(Step|Stage) (\d+)\s*[:—–-]\s*(.+)$/i.exec(text(node).trim());
      if (!match) continue;
      const end = nodes.findIndex((next, j) => j > i && next.type === 'heading' && next.depth <= 2);
      const description = instructions(nodes.slice(i + 1, end === -1 ? undefined : end));
      if (Number(match[2]) !== steps.length + 1 || !description || !node.data?.id) {
        throw new Error(`HowTo requires consecutive steps with text and an anchor: ${text(node)}`);
      }
      steps.push({name: text(node).trim(), text: description, anchor: node.data.id});
    }

    file.data.frontMatter.articleSchemas = {
      ...(questions.length ? {faq: questions} : {}),
      ...(steps.length >= 2 ? {howTo: steps} : {}),
    };
    // Retire the separately maintained FAQ scripts, including in excerpts where
    // the actual questions are absent. Keep VideoObject and other scripts intact.
    tree.children = nodes.filter(node => !isLegacyFAQScript(node));
  };
};
