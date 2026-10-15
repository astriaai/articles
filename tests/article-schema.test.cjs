const assert = require('node:assert/strict');
const {test} = require('node:test');
const articleSchema = require('../plugins/remark-article-schema');

async function transform(source) {
  const [{unified}, {default: parse}, {default: mdx}] = await Promise.all([
    import('unified'), import('remark-parse'), import('remark-mdx'),
  ]);
  const headings = require('@docusaurus/mdx-loader/lib/remark/headings').default;
  const processor = unified().use(parse).use(mdx)
    .use(headings, {anchorsMaintainCase: false}).use(articleSchema);
  const file = {data: {frontMatter: {}}};
  const tree = await processor.run(processor.parse(source), file);
  return {tree, schemas: file.data.frontMatter.articleSchemas};
}

test('FAQ data follows visible copy and legacy scripts are retired without removing video data', async () => {
  const {tree, schemas} = await transform(`
export const faqSchema = {'@type': 'FAQPage', mainEntity: []};

<script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(faqSchema).replace(/</g, '\\u003c')}} />
<script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(videoSchema)}} />

## Frequently asked questions

### How do I **start**?

Use [Astria](https://www.astria.ai/) and check the **product** reference.

Review the result before publishing.

[Explore Astria](https://www.astria.ai/ecommerce).

For current rates, see [Astria pricing](https://www.astria.ai/pricing).

## Further reading

This is outside the FAQ.
`);
  assert.deepEqual(schemas.faq, [{
    '@type': 'Question', name: 'How do I start?',
    acceptedAnswer: {'@type': 'Answer', text: 'Use Astria and check the product reference. Review the result before publishing.'},
  }]);
  const scripts = tree.children.filter(node => node.name === 'script');
  assert.equal(scripts.length, 1);
  assert.match(scripts[0].attributes[1].value.value, /videoSchema/);
});

test('HowTo steps use real Docusaurus anchors and visible instructions in order', async () => {
  const {schemas} = await transform(`
## Step 1: Choose a mode

Open **Generate**, then choose Lookbook.

## Step 2: Add references

Upload the shirt and trousers.

## Review

Inspect the images.
`);
  assert.deepEqual(schemas.howTo, [
    {name: 'Step 1: Choose a mode', text: 'Open Generate, then choose Lookbook.', anchor: 'step-1-choose-a-mode'},
    {name: 'Step 2: Add references', text: 'Upload the shirt and trousers.', anchor: 'step-2-add-references'},
  ]);
});

test('excerpts and non-procedural articles emit no unsupported schema', async () => {
  const {schemas, tree} = await transform(`
<script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(faqSchema)}} />

Introductory text only.
`);
  assert.deepEqual(schemas, {});
  assert.equal(tree.children.some(node => node.name === 'script'), false);
});

test('empty FAQ answers and skipped steps fail compilation', async () => {
  await assert.rejects(transform('## Frequently asked questions\n\n### Missing answer?'), /no answer/);
  await assert.rejects(transform('## Step 2: Upload\n\nUpload your photo.'), /consecutive steps/);
});
