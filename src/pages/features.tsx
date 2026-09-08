import React, {useMemo, useState, type ReactNode} from 'react';
import Head from '@docusaurus/Head';
import Layout from '@theme/Layout';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './features.module.css';

type PictureProps = {
  alt: string;
  className?: string;
  eager?: boolean;
  src: string;
};

function Picture({alt, className, eager = false, src}: PictureProps): ReactNode {
  return (
    <img
      alt={alt}
      className={className}
      decoding="async"
      loading={eager ? 'eager' : 'lazy'}
      src={useBaseUrl(src)}
    />
  );
}

function ExternalLink({children, className, href}: {
  children: ReactNode;
  className?: string;
  href: string;
}): ReactNode {
  return (
    <a className={className} href={href} rel="noreferrer" target="_blank">
      {children}
    </a>
  );
}

function MoneyModel(): ReactNode {
  const [skus, setSkus] = useState(80);
  const [drops, setDrops] = useState(4);
  const [costPerSku, setCostPerSku] = useState(180);
  const [reduction, setReduction] = useState(25);

  const figures = useMemo(() => {
    const annual = skus * drops * costPerSku;
    return {
      annual,
      opportunity: annual * (reduction / 100),
    };
  }, [costPerSku, drops, reduction, skus]);

  const money = new Intl.NumberFormat('en-US', {
    currency: 'USD',
    maximumFractionDigits: 0,
    style: 'currency',
  });

  return (
    <section className={styles.money} id="economics" aria-labelledby="money-title">
      <div className={styles.moneyIntro}>
        <p className={styles.kicker}>Put your own numbers in</p>
        <h2 id="money-title">The expensive part is doing the same thinking twice.</h2>
        <p>
          A shoot budget is not only the day on set. It is the casting conversation,
          the lighting decision, the rounds of approval, and then doing it all again
          because three products arrived late. Astria turns that approved thinking
          into something the next product can inherit.
        </p>
        <a href={useBaseUrl('/product-photography-cost-per-sku/')}>See the full cost-per-SKU model</a>
      </div>

      <div className={styles.calculator}>
        <div className={styles.inputGrid}>
          <label>
            Products in a drop
            <input
              aria-label="Products in a drop"
              max="1000"
              min="1"
              onChange={(event) => setSkus(Number(event.target.value) || 0)}
              type="number"
              value={skus}
            />
          </label>
          <label>
            Drops each year
            <input
              aria-label="Drops each year"
              max="52"
              min="1"
              onChange={(event) => setDrops(Number(event.target.value) || 0)}
              type="number"
              value={drops}
            />
          </label>
          <label>
            Current approved cost per SKU
            <span className={styles.moneyInput}>
              <span>$</span>
              <input
                aria-label="Current approved cost per SKU in dollars"
                max="100000"
                min="0"
                onChange={(event) => setCostPerSku(Number(event.target.value) || 0)}
                type="number"
                value={costPerSku}
              />
            </span>
          </label>
          <label>
            Reduction worth testing
            <span className={styles.moneyInput}>
              <input
                aria-label="Reduction worth testing in percent"
                max="90"
                min="1"
                onChange={(event) => setReduction(Number(event.target.value) || 0)}
                type="number"
                value={reduction}
              />
              <span>%</span>
            </span>
          </label>
        </div>

        <div className={styles.moneyResult} aria-live="polite">
          <p>Your current annual production envelope</p>
          <strong>{money.format(figures.annual)}</strong>
          <div>
            <span>A {reduction}% improvement would return</span>
            <b>{money.format(figures.opportunity)}</b>
            <span>to the year’s creative budget.</span>
          </div>
        </div>
        <p className={styles.calculatorNote}>
          The prefilled figures are illustrative. This is a planning model, not a savings
          promise. Use your real approved-SKU cost and include setup, review, rejected
          work, corrections, and delivery.
        </p>
      </div>
    </section>
  );
}

const stages = [
  {
    title: 'Bring the products',
    copy: 'Start with the flat lays, packshots, product pages, or reference photographs you already have. The garment is evidence, not inspiration.',
  },
  {
    title: 'Find the photograph',
    copy: 'Choose the cast, light, distance, setting, and attitude. Work from a template, a rights-cleared reference, or the visual language already inside the brand.',
  },
  {
    title: 'Approve the world once',
    copy: 'Review the first look until it feels true. The useful deliverable is not one lucky image—it is the treatment the next SKU can inherit.',
  },
  {
    title: 'Let the collection enter it',
    copy: 'Run the approved direction across the assortment, then branch the same visual world into PDP, lookbook, campaign, social, and motion.',
  },
];

export default function FeaturesPage(): ReactNode {
  return (
    <Layout
      description="Astria turns a brand's photographic language into a reusable AI production system for products, lookbooks, campaigns, social content, and video."
      title="One photographic language. A whole collection.">
      <Head>
        <meta property="og:image" content="https://www.astria.ai/articles/img/prompt-recipes/fashion-catalog-result.webp" />
      </Head>

      <main className={styles.page}>
        <section className={styles.hero}>
          <div className={styles.heroCopy}>
            <p className={styles.kicker}>Astria for fashion and product teams</p>
            <h1>Your brand is not a preset. It is a way of seeing.</h1>
            <p className={styles.heroLead}>
              A photographer gives a collection one world: the same eye, the same
              light, the same quiet rules. Astria lets your team keep that world—then
              bring every product, crop, channel, and late arrival into it.
            </p>
            <div className={styles.heroActions}>
              <ExternalLink className={styles.primaryAction} href="https://www.astria.ai/w/america-basics">
                Walk through a real production
              </ExternalLink>
              <ExternalLink className={styles.textAction} href="https://www.astria.ai/ecommerce">
                Start with your products
              </ExternalLink>
            </div>
            <p className={styles.proofLine}>
              See the inputs, the reusable treatment, and the finished photographs.
              No mystery gallery. No “imagine if.”
            </p>
          </div>

          <div className={styles.contactSheet} aria-label="Product references becoming a fashion photograph">
            <figure className={styles.heroResult}>
              <Picture
                alt="Fashion model wearing the products from the reference photographs"
                eager
                src="/img/prompt-recipes/fashion-catalog-result.webp"
              />
              <figcaption>The finished frame</figcaption>
            </figure>
            <div className={styles.referenceStrip}>
              <figure>
                <Picture alt="Brown sweatshirt product reference" eager src="/img/prompt-recipes/fashion-shirt-reference.webp" />
                <figcaption>Shirt</figcaption>
              </figure>
              <figure>
                <Picture alt="Grey pleated skirt product reference" eager src="/img/prompt-recipes/fashion-skirt-reference.webp" />
                <figcaption>Skirt</figcaption>
              </figure>
              <figure>
                <Picture alt="Shoe product reference" eager src="/img/prompt-recipes/fashion-shoes-reference.webp" />
                <figcaption>Shoes</figcaption>
              </figure>
            </div>
            <span className={styles.sheetNote}>Three products. One photograph. A direction the next look can reuse.</span>
          </div>
        </section>

        <section className={styles.brandProof} aria-label="Brands using Astria">
          <p>Made for teams with real seasons to ship</p>
          <ul>
            <li>Terminal X</li>
            <li>Renuar</li>
            <li>Fox</li>
            <li>Golf &amp; Co</li>
            <li>Ronny Kobo</li>
            <li>Nununu</li>
            <li>Sacks</li>
            <li>Nine West</li>
          </ul>
        </section>

        <section className={styles.manifesto} aria-labelledby="manifesto-title">
          <p>What changes</p>
          <div>
            <h2 id="manifesto-title">The photograph stops being an event.</h2>
            <p>
              It becomes an asset the brand can return to. Add a colorway after launch.
              Give wholesale a wider crop. Turn the approved campaign still into a short
              film. The taste stays human; the repetition does not have to be.
            </p>
          </div>
        </section>

        <section className={styles.process} aria-labelledby="process-title">
          <header className={styles.sectionHeader}>
            <h2 id="process-title">First find the look. Then make it useful.</h2>
            <p>
              This is closer to running a shoot than ordering images from a vending machine.
              The difference is that the approved setup survives the day.
            </p>
          </header>
          <ol className={styles.stageList}>
            {stages.map((stage, index) => (
              <li key={stage.title}>
                <span>{index + 1}</span>
                <h3>{stage.title}</h3>
                <p>{stage.copy}</p>
              </li>
            ))}
          </ol>
        </section>

        <section className={styles.collection} aria-labelledby="collection-title">
          <div className={styles.collectionHeading}>
            <h2 id="collection-title">One visual world, wherever the product has to go.</h2>
            <p>
              Clean enough for the product page. Alive enough for the campaign.
              Recognizable enough to belong to the same brand.
            </p>
          </div>
          <div className={styles.collectionGrid}>
            <figure className={styles.collectionTall}>
              <Picture alt="Fashion campaign image from an Astria workflow" src="/img/prompt-recipes/bridal-terrace-result.webp" />
              <figcaption><b>Campaign</b><span>Give the collection somewhere to live.</span></figcaption>
            </figure>
            <figure>
              <Picture alt="Generated fashion catalog image" src="/img/prompt-recipes/fashion-catalog-result.webp" />
              <figcaption><b>Lookbook</b><span>Keep the cast and treatment across the sequence.</span></figcaption>
            </figure>
            <figure>
              <Picture alt="Generated volumetric dress packshot" src="/img/prompt-recipes/packshot-dress-result.webp" />
              <figcaption><b>Product page</b><span>Make the product easy to inspect.</span></figcaption>
            </figure>
            <figure>
              <Picture alt="Generated jewelry macro photograph" src="/img/prompt-recipes/jewelry-ring-result.webp" />
              <figcaption><b>Detail</b><span>Bring the eye close without losing the object.</span></figcaption>
            </figure>
            <figure>
              <Picture alt="Generated beauty campaign still life" src="/img/prompt-recipes/beauty-still-life-result.webp" />
              <figcaption><b>Social and launch</b><span>Branch the art direction into new formats.</span></figcaption>
            </figure>
          </div>
        </section>

        <MoneyModel />

        <section className={styles.proof} aria-labelledby="proof-title">
          <header className={styles.sectionHeader}>
            <h2 id="proof-title">Don’t take the feature list on faith. Open the work.</h2>
            <p>
              The useful examples show more than a beautiful last frame. They let you see
              the source product, the repeatable setup, and the neighboring outputs.
            </p>
          </header>

          <div className={styles.proofRows}>
            <article>
              <div className={styles.proofImages}>
                <Picture alt="Sweatshirt reference for America Basics" src="/img/prompt-recipes/fashion-shirt-reference.webp" />
                <Picture alt="America Basics full-look result" src="/img/prompt-recipes/fashion-catalog-result.webp" />
              </div>
              <div className={styles.proofCopy}>
                <h3>America Basics</h3>
                <p>
                  Several products enter one full-look photograph. Study the inputs, then
                  open the template that holds the treatment together.
                </p>
                <nav aria-label="America Basics examples">
                  <ExternalLink href="https://www.astria.ai/w/america-basics">View the workspace</ExternalLink>
                  <ExternalLink href="https://www.astria.ai/p/basic-shirt">Use the template</ExternalLink>
                  <ExternalLink href="https://www.astria.ai/prompts/35818293?ws=54">See the source prompt</ExternalLink>
                </nav>
              </div>
            </article>

            <article>
              <div className={styles.proofImages}>
                <Picture alt="Dress product reference" src="/img/prompt-recipes/packshot-dress-reference.webp" />
                <Picture alt="Generated dress packshot" src="/img/prompt-recipes/packshot-dress-result.webp" />
              </div>
              <div className={styles.proofCopy}>
                <h3>3D ghost packshots</h3>
                <p>
                  Begin with the real garment. Build front, side, three-quarter, detail,
                  and motion assets around it—then review anything the source image could
                  not prove.
                </p>
                <nav aria-label="3D ghost packshot examples">
                  <ExternalLink href="https://www.astria.ai/w/3d-packshots">View the workspace</ExternalLink>
                  <ExternalLink href="https://www.astria.ai/p/3d-packshots-dress">Use the dress template</ExternalLink>
                  <a href={useBaseUrl('/3d-packshots-ecommerce/')}>Read the production guide</a>
                </nav>
              </div>
            </article>

            <article>
              <div className={styles.proofImages}>
                <Picture alt="Ring product reference" src="/img/prompt-recipes/jewelry-ring-reference.webp" />
                <Picture alt="Generated ring macro" src="/img/prompt-recipes/jewelry-ring-result.webp" />
              </div>
              <div className={styles.proofCopy}>
                <h3>Jewelry, close enough to count</h3>
                <p>
                  Atmosphere comes after accuracy. Check the band, setting, stone count,
                  scale, and finish before the photograph earns its campaign lighting.
                </p>
                <nav aria-label="Jewelry examples">
                  <ExternalLink href="https://www.astria.ai/w/jewelry-product-photography">View the workspace</ExternalLink>
                  <ExternalLink href="https://www.astria.ai/p/jewelry-ring">Use the ring template</ExternalLink>
                  <a href={useBaseUrl('/jewelry-photography-prompts/')}>Copy the shot sequence</a>
                </nav>
              </div>
            </article>
          </div>
        </section>

        <section className={styles.capabilities} aria-labelledby="capabilities-title">
          <div>
            <h2 id="capabilities-title">Everything the work remembers</h2>
            <p>
              Products, casting, locations, poses, references, prompts, approved templates,
              and the images and films that came from them—kept together so the next person
              does not have to reconstruct the photographer’s intent from a folder name.
            </p>
          </div>
          <ul>
            <li><b>Models and casting</b><span>Keep a recognizable cast across scenes and seasons.</span></li>
            <li><b>Products and references</b><span>Build from the real details customers will receive.</span></li>
            <li><b>Templates</b><span>Save the visual decisions worth repeating.</span></li>
            <li><b>Boards and review</b><span>Discuss the photograph beside the photograph.</span></li>
            <li><b>Current image models</b><span>Choose the model for the brief, not the other way around.</span></li>
            <li><b>Image, video, and API</b><span>Explore by hand; repeat with a production workflow.</span></li>
          </ul>
        </section>

        <section className={styles.finalCta}>
          <Picture alt="Fashion model in a finished Astria campaign photograph" src="/img/prompt-recipes/fashion-catalog-result.webp" />
          <div>
            <h2>Bring us one product. Leave with a way to photograph the next hundred.</h2>
            <p>
              Start from a proven template, inspect a public workspace, or bring the visual
              language your brand already owns.
            </p>
            <div className={styles.heroActions}>
              <ExternalLink className={styles.primaryAction} href="https://www.astria.ai/ecommerce">
                Create with Astria
              </ExternalLink>
              <ExternalLink className={styles.textAction} href="https://www.astria.ai/gallery/workspaces">
                Browse real workspaces
              </ExternalLink>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
