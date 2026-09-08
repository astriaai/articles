import React, {useState, type ReactNode} from 'react';
import Head from '@docusaurus/Head';
import Layout from '@theme/Layout';
import useBaseUrl from '@docusaurus/useBaseUrl';
import {
  featureGuides,
  guideOrder,
  type FeatureGuide as FeatureGuideData,
  type GuideLink,
} from '../../features/guides';
import styles from './styles.module.css';

function SmartLink({children, href}: {children: ReactNode; href: string}): ReactNode {
  const external = href.startsWith('http');
  return (
    <a href={href} rel={external ? 'noreferrer' : undefined} target={external ? '_blank' : undefined}>
      {children}
    </a>
  );
}

function PromptCard({label, text, why}: {label: string; text: string; why: string}): ReactNode {
  const [copied, setCopied] = useState(false);

  async function copyPrompt(): Promise<void> {
    await navigator.clipboard.writeText(text);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1600);
  }

  return (
    <article className={styles.promptCard}>
      <div className={styles.promptTopline}>
        <span>{label}</span>
        <button onClick={copyPrompt} type="button">{copied ? 'Copied' : 'Copy prompt'}</button>
      </div>
      <p className={styles.promptText}>{text}</p>
      <p className={styles.promptWhy}><b>Why this works</b>{why}</p>
    </article>
  );
}

function LinkList({links}: {links: GuideLink[]}): ReactNode {
  return (
    <nav className={styles.linkList}>
      {links.map((link) => <SmartLink href={link.href} key={link.href}>{link.label}<span aria-hidden="true">↗</span></SmartLink>)}
    </nav>
  );
}

export default function FeatureGuide({guide}: {guide: FeatureGuideData}): ReactNode {
  const position = guideOrder.indexOf(guide.slug as (typeof guideOrder)[number]);
  const previous = position > 0 ? featureGuides[guideOrder[position - 1]] : undefined;
  const next = position < guideOrder.length - 1 ? featureGuides[guideOrder[position + 1]] : undefined;
  const heroSrc = useBaseUrl(guide.heroImage);
  const proofSrc = useBaseUrl(guide.proof.image);

  return (
    <Layout description={guide.description} title={guide.title}>
      <Head>
        <meta property="og:image" content={`https://www.astria.ai${useBaseUrl(guide.heroImage)}`} />
        <meta property="og:type" content="article" />
      </Head>

      <main className={styles.page}>
        <section className={styles.hero}>
          <div className={styles.heroCopy}>
            <a className={styles.back} href="/articles/features/">← All feature guides</a>
            <p className={styles.eyebrow}>{guide.eyebrow}</p>
            <h1>{guide.title}</h1>
            <p className={styles.lead}>{guide.lead}</p>
            <div className={styles.heroActions}>
              <a className={styles.primary} href="#make-it">Make it, step by step</a>
              <a className={styles.secondary} href="#prompts">Copy the prompts</a>
            </div>
          </div>
          <figure className={styles.heroImage}>
            <img alt={guide.heroAlt} decoding="async" fetchPriority="high" src={heroSrc} />
            <figcaption>{guide.heroNote}</figcaption>
          </figure>
        </section>

        <section className={styles.intro}>
          <p className={styles.sideLabel}>The point of view</p>
          <div>
            <h2>{guide.pointOfView.title}</h2>
            {guide.pointOfView.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </div>
        </section>

        {guide.guardrail && (
          <aside className={styles.guardrail}>
            <span>Before you make anything</span>
            <div>
              <h2>{guide.guardrail.title}</h2>
              <p>{guide.guardrail.text}</p>
              {guide.guardrail.link && <SmartLink href={guide.guardrail.link.href}>{guide.guardrail.link.label}</SmartLink>}
            </div>
          </aside>
        )}

        <section className={styles.workflow} id="make-it">
          <header className={styles.sectionHeader}>
            <p className={styles.sideLabel}>Make it</p>
            <div>
              <h2>From blank page to a production-ready first set.</h2>
              <p>Work small until the cast, product and photograph agree. Then make the system repeatable.</p>
            </div>
          </header>
          <ol>
            {guide.workflow.map((step, index) => (
              <li key={step.title}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </li>
            ))}
          </ol>
        </section>

        <section className={styles.prompts} id="prompts">
          <header className={styles.promptHeader}>
            <p className={styles.sideLabel}>Prompt book</p>
            <div>
              <h2>Prompts you can actually start from.</h2>
              <p>Replace the placeholder IDs with your Astria references. Keep the factual product and identity instructions; change the creative language until it sounds like your brand.</p>
            </div>
          </header>
          <div className={styles.promptGrid}>
            {guide.prompts.map((prompt) => <PromptCard key={prompt.label} {...prompt} />)}
          </div>
        </section>

        <section className={styles.models}>
          <header>
            <p className={styles.sideLabel}>Choose the tool by the photograph</p>
            <h2>There is no single “best model.” There is a best next move.</h2>
          </header>
          <div className={styles.modelGrid}>
            {guide.modelNotes.map((item) => (
              <article key={item.model}>
                <p>{item.model}</p>
                <h3>{item.use}</h3>
                <span>{item.note}</span>
              </article>
            ))}
          </div>
          <p className={styles.modelFootnote}>
            Model availability changes. Astria added Recraft V4.1 in May 2026; check the current model catalog before production.
            {' '}<a href="https://docs.astria.ai/docs/changes/" rel="noreferrer" target="_blank">See Astria changes</a>
          </p>
        </section>

        <section className={styles.money}>
          <p className={styles.sideLabel}>Show me the money</p>
          <div className={styles.moneyCopy}>
            <h2>{guide.money.title}</h2>
            <p>{guide.money.text}</p>
          </div>
          <ul>
            {guide.money.wins.map((win) => <li key={win}>{win}</li>)}
          </ul>
        </section>

        <section className={styles.proof}>
          <figure>
            <img alt={guide.proof.imageAlt} decoding="async" loading="lazy" src={proofSrc} />
          </figure>
          <div>
            <p className={styles.sideLabel}>See the work</p>
            <h2>{guide.proof.title}</h2>
            <p>{guide.proof.text}</p>
            <LinkList links={guide.proof.links} />
          </div>
        </section>

        <section className={styles.skills}>
          <header>
            <p className={styles.sideLabel}>Build it with Astria Skills</p>
            <h2>The craft can live in your workflow.</h2>
            <p>The open-source Astria skills turn these methods into guided work with the Astria CLI. Read the skill, adapt the judgment, and keep every generation reviewable.</p>
          </header>
          <div>
            {guide.skills.map((skill) => (
              <article key={skill.name}>
                <h3>{skill.name}</h3>
                <p>{skill.text}</p>
                <SmartLink href={skill.href}>Open the skill</SmartLink>
              </article>
            ))}
          </div>
          <SmartLink href="https://github.com/astriaai/skills">Explore all Astria Skills on GitHub</SmartLink>
        </section>

        <section className={styles.closing}>
          <p>{guide.closing}</p>
          <a className={styles.primary} href="https://www.astria.ai/ecommerce" rel="noreferrer" target="_blank">Start a production</a>
        </section>

        <nav aria-label="Feature guide navigation" className={styles.guideNav}>
          {previous ? <a href={`/articles/features/${previous.slug}/`}><span>Previous</span>{previous.eyebrow.split(' / ').pop()}</a> : <span />}
          {next ? <a href={`/articles/features/${next.slug}/`}><span>Next</span>{next.eyebrow.split(' / ').pop()}</a> : <span />}
        </nav>
      </main>
    </Layout>
  );
}
