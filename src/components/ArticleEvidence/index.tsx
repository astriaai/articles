import React from 'react';
import styles from './styles.module.css';

type EvidenceImage = {
  alt: string;
  label: string;
  src: string;
};

type EvidenceProfile = {
  eyebrow: string;
  title: string;
  summary: string;
  stages: [string, string, string];
  images?: [EvidenceImage, EvidenceImage];
  workspaceUrl: string;
  workspaceLabel: string;
  templateUrl: string;
  templateLabel: string;
  promptUrl?: string;
  promptLabel?: string;
  guideUrl: string;
  guideLabel: string;
  note: string;
};

const profiles = {
  fashion: {
    eyebrow: 'Public fashion example',
    title: 'See the product references become one usable frame',
    summary: 'The public example keeps the product set inspectable, then turns the approved treatment into catalog, detail, and campaign variations.',
    stages: ['Attach the product set', 'Run one approved treatment', 'Review every garment detail'],
    images: [
      {src: '/articles/img/prompt-recipes/fashion-shirt-reference.jpg', alt: 'Brown graphic sweatshirt product reference on white', label: 'Reference product'},
      {src: '/articles/img/prompt-recipes/fashion-catalog-result.jpg', alt: 'Model wearing the referenced sweatshirt, skirt, socks, and shoes', label: 'Generated full-look result'},
    ],
    workspaceUrl: 'https://www.astria.ai/w/america-basics',
    workspaceLabel: 'Inspect America Basics',
    templateUrl: 'https://www.astria.ai/p/basic-shirt',
    templateLabel: 'Use the Basic Shirt template',
    promptUrl: 'https://www.astria.ai/prompts/35818293?ws=54',
    promptLabel: 'Open the source prompt',
    guideUrl: '/articles/ai-fashion-photography-prompts',
    guideLabel: 'Read the fashion prompt guide',
    note: 'The workspace and template are public. The exact prompt page may ask you to sign in.',
  },
  lookbook: {
    eyebrow: 'Public lookbook system',
    title: 'Build a sequence from stable inputs, not isolated prompts',
    summary: 'A reusable lookbook holds casting, products, palette, light, and location steady while the shot distance, pose, and action change.',
    stages: ['Lock the visual world', 'Vary one shot decision', 'Edit the frames as a sequence'],
    images: [
      {src: '/articles/img/prompt-recipes/fashion-skirt-reference.jpg', alt: 'Grey pleated skirt used as a lookbook product reference', label: 'Stable product input'},
      {src: '/articles/img/prompt-recipes/fashion-catalog-result.jpg', alt: 'Full-look fashion frame assembled from several product references', label: 'One frame in the sequence'},
    ],
    workspaceUrl: 'https://www.astria.ai/w/angela-fraser',
    workspaceLabel: 'Inspect Language of Form',
    templateUrl: 'https://www.astria.ai/p/chapter-2-the-lookbook',
    templateLabel: 'Use the lookbook template',
    guideUrl: '/articles/ai-lookbook-prompts',
    guideLabel: 'Copy the eight-frame sequence',
    note: 'The public template exposes the reusable system; individual working rows are not all separately public.',
  },
  packshot: {
    eyebrow: 'Public packshot example',
    title: 'Compare the source garment with a generated product view',
    summary: 'The useful unit is a reviewed coverage set: front, back, side, detail, and channel crop—each checked against the supplied product.',
    stages: ['Supply product evidence', 'Generate the required view', 'Reject invented construction'],
    images: [
      {src: '/articles/img/prompt-recipes/packshot-dress-reference.jpg', alt: 'Dress product reference photographed on white', label: 'Reference garment'},
      {src: '/articles/img/prompt-recipes/packshot-dress-result.jpg', alt: 'Volumetric packshot generated from the dress reference', label: 'Generated packshot'},
    ],
    workspaceUrl: 'https://www.astria.ai/w/3d-packshots',
    workspaceLabel: 'Inspect 3D Ghost Packshots',
    templateUrl: 'https://www.astria.ai/p/3d-packshots-dress',
    templateLabel: 'Use Dress Packshots',
    promptUrl: 'https://www.astria.ai/prompts/40128059?ws=268',
    promptLabel: 'Open the front-view prompt',
    guideUrl: '/articles/ecommerce-product-photography-prompts',
    guideLabel: 'Read the ecommerce prompt guide',
    note: 'A generated unseen surface is an inference. Use additional references or measured 3D data when the image must prove construction.',
  },
  footwear: {
    eyebrow: 'Footwear production path',
    title: 'Separate product evidence from the image that sells the shoe',
    summary: 'Use captured angles as the factual anchor, then scale the expensive on-foot and lifestyle frames from the same approved direction.',
    stages: ['Capture the required angles', 'Generate on-foot context', 'Audit material and left/right details'],
    workspaceUrl: 'https://www.astria.ai/w/fashion-3d-packshots',
    workspaceLabel: 'Inspect Fashion 3D Packshots',
    templateUrl: 'https://www.astria.ai/p/3d-packshots-for-shoes',
    templateLabel: 'Use the shoes template',
    guideUrl: '/articles/ecommerce-product-photography-prompts',
    guideLabel: 'See the product prompt framework',
    note: 'The public workspace organizes examples by product class. Approve soles, logos, hardware, and asymmetric details from real references.',
  },
  jewelry: {
    eyebrow: 'Public jewelry example',
    title: 'Prove the geometry before adding atmosphere',
    summary: 'Start with an isolated macro that makes the piece auditable. Add hands, styling, and campaign context only after the product passes.',
    stages: ['Verify the isolated piece', 'Establish on-body scale', 'Add campaign context'],
    images: [
      {src: '/articles/img/prompt-recipes/jewelry-ring-reference.jpg', alt: 'Ring product reference showing its setting and band', label: 'Reference ring'},
      {src: '/articles/img/prompt-recipes/jewelry-ring-result.jpg', alt: 'Generated macro photograph of the referenced ring', label: 'Generated macro'},
    ],
    workspaceUrl: 'https://www.astria.ai/w/jewelry-product-photography',
    workspaceLabel: 'Inspect the jewelry workspace',
    templateUrl: 'https://www.astria.ai/p/jewelry-ring',
    templateLabel: 'Use the Ring template',
    promptUrl: 'https://www.astria.ai/prompts/33498743?ws=297',
    promptLabel: 'Open the macro prompt',
    guideUrl: '/articles/jewelry-photography-prompts',
    guideLabel: 'Copy the jewelry prompt set',
    note: 'Count stones and prongs, compare the setting profile, and verify scale before judging mood or polish.',
  },
  casting: {
    eyebrow: 'Reusable casting workflow',
    title: 'Approve identity and treatment as separate decisions',
    summary: 'A recurring cast needs a likeness proof, an approved portrait or fashion treatment, and a collection-level consistency review.',
    stages: ['Approve the identity', 'Lock the image treatment', 'Review the complete cast together'],
    workspaceUrl: 'https://www.astria.ai/w/america-basics',
    workspaceLabel: 'Inspect a consistent cast',
    templateUrl: 'https://www.astria.ai/p/basic-shirt',
    templateLabel: 'Use the fashion template',
    guideUrl: '/articles/ai-fashion-photography-prompts',
    guideLabel: 'See the reusable prompt structure',
    note: 'A convincing person does not prove garment fit. Review likeness, styling, product fidelity, and usage rights independently.',
  },
  virtualTryOn: {
    eyebrow: 'Product-to-model workflow',
    title: 'Treat the garment as evidence, not inspiration',
    summary: 'The source product defines construction. Casting, pose, and setting can change around it only after the garment survives review.',
    stages: ['Prepare clean product views', 'Generate the on-model frame', 'Compare construction and scale'],
    workspaceUrl: 'https://www.astria.ai/w/america-basics',
    workspaceLabel: 'Inspect America Basics',
    templateUrl: 'https://www.astria.ai/p/basic-shirt',
    templateLabel: 'Use the Basic Shirt template',
    guideUrl: '/articles/ai-fashion-photography-prompts',
    guideLabel: 'Read the fashion prompt guide',
    note: 'Generated on-model imagery communicates styling and proportion; it should not be presented as measured fit evidence.',
  },
  video: {
    eyebrow: 'Still-to-motion workflow',
    title: 'Approve the fashion frame before asking it to move',
    summary: 'The most controllable film workflow begins with a signed-off still sequence, then animates short shots and reviews continuity between cuts.',
    stages: ['Approve the still sequence', 'Animate one shot at a time', 'Review motion and continuity'],
    workspaceUrl: 'https://www.astria.ai/w/dark-swimwear',
    workspaceLabel: 'Inspect the source still sequence',
    templateUrl: 'https://www.astria.ai/p/swimsuit-set-1',
    templateLabel: 'Use the still template',
    guideUrl: '/articles/ai-lookbook-prompts',
    guideLabel: 'Build the source sequence',
    note: 'This public example demonstrates controlled neighboring stills, not a finished video. Use it to establish the frames that motion inherits.',
  },
  channel: {
    eyebrow: 'Channel-ready image system',
    title: 'Generate against a required media slot, not a vague campaign mood',
    summary: 'Keep one approved product source, then create the exact primary, alternate, detail, lifestyle, and campaign assets each channel needs.',
    stages: ['Name the media slot', 'Run the product-class template', 'Apply channel-specific QA'],
    images: [
      {src: '/articles/img/prompt-recipes/packshot-dress-reference.jpg', alt: 'Dress reference used as the approved product source', label: 'Approved product source'},
      {src: '/articles/img/prompt-recipes/packshot-dress-result.jpg', alt: 'Generated dress packshot ready for channel review', label: 'Candidate media asset'},
    ],
    workspaceUrl: 'https://www.astria.ai/w/3d-packshots',
    workspaceLabel: 'Inspect the packshot workspace',
    templateUrl: 'https://www.astria.ai/p/3d-packshots-dress',
    templateLabel: 'Use Dress Packshots',
    guideUrl: '/articles/ecommerce-product-photography-prompts',
    guideLabel: 'Copy the media-slot prompts',
    note: 'Marketplace and storefront rules remain the delivery authority. A visually strong generation can still fail a channel requirement.',
  },
  cost: {
    eyebrow: 'Reusable production economics',
    title: 'Measure the approved system, not the cheapest generated image',
    summary: 'The useful denominator includes source preparation, setup, review, rejects, corrections, derivatives, and the number of approved SKUs.',
    stages: ['Capture the source of truth', 'Approve a reusable treatment', 'Count accepted channel assets'],
    workspaceUrl: 'https://www.astria.ai/w/america-basics',
    workspaceLabel: 'Inspect a reusable production',
    templateUrl: 'https://www.astria.ai/p/basic-shirt',
    templateLabel: 'Inspect the reusable template',
    guideUrl: '/articles/ecommerce-product-photography-prompts',
    guideLabel: 'See the repeatable shot system',
    note: 'Compare cost per approved SKU or deliverable. Generation price alone excludes the work that determines whether an asset can ship.',
  },
  models: {
    eyebrow: 'Model-selection workflow',
    title: 'Route the brief by its hardest constraint',
    summary: 'Choose the model after naming the failure that matters most: identity, product geometry, typography, texture, or general art direction.',
    stages: ['Name the hardest constraint', 'Test the same reference set', 'Choose from reviewed outputs'],
    workspaceUrl: 'https://www.astria.ai/w/america-basics',
    workspaceLabel: 'Inspect a reference-led example',
    templateUrl: 'https://www.astria.ai/p/basic-shirt',
    templateLabel: 'Use the reference template',
    guideUrl: '/articles/best-ai-image-models-fashion',
    guideLabel: 'Open the current benchmark',
    note: 'Model availability and behavior change. Re-run the same reference set instead of treating one attractive sample as a permanent ranking.',
  },
  comparisonFashion: {
    eyebrow: 'Astria public proof',
    title: 'Inspect a complete fashion workflow before comparing feature lists',
    summary: 'The public example shows product inputs, a reusable treatment, and finished outputs together—the unit a collection-scale comparison should evaluate.',
    stages: ['Load the product set', 'Reuse the approved direction', 'Review collection outputs'],
    images: [
      {src: '/articles/img/prompt-recipes/fashion-shirt-reference.jpg', alt: 'Product reference used in a public Astria fashion workflow', label: 'Product input'},
      {src: '/articles/img/prompt-recipes/fashion-catalog-result.jpg', alt: 'On-model result from the public fashion workflow', label: 'Reviewed output'},
    ],
    workspaceUrl: 'https://www.astria.ai/w/america-basics',
    workspaceLabel: 'Inspect America Basics',
    templateUrl: 'https://www.astria.ai/p/basic-shirt',
    templateLabel: 'Inspect the reusable template',
    promptUrl: 'https://www.astria.ai/prompts/35818293?ws=54',
    promptLabel: 'Open the source prompt',
    guideUrl: '/articles/ai-fashion-photography-prompts',
    guideLabel: 'See how the prompt system works',
    note: 'This is Astria workflow evidence, not a controlled image-quality test against the other platform.',
  },
  comparisonWorkflow: {
    eyebrow: 'Astria public proof',
    title: 'Inspect the reusable unit behind the finished images',
    summary: 'For workflow tools, compare what persists: products, casting, references, templates, approvals, and the team context around them.',
    stages: ['Assemble reusable inputs', 'Approve the treatment', 'Hand the system to the team'],
    workspaceUrl: 'https://www.astria.ai/w/angela-fraser',
    workspaceLabel: 'Inspect Language of Form',
    templateUrl: 'https://www.astria.ai/p/chapter-2-the-lookbook',
    templateLabel: 'Inspect the lookbook system',
    guideUrl: '/articles/ai-lookbook-prompts',
    guideLabel: 'See the sequence structure',
    note: 'This public workspace demonstrates Astria’s reusable workflow. It does not substitute for testing the competing product with your team.',
  },
  comparisonPackshot: {
    eyebrow: 'Astria public proof',
    title: 'Inspect a source-to-packshot workflow before choosing a service',
    summary: 'A credible comparison should preserve the source garment, produce the required view, and expose what still needs human review.',
    stages: ['Start from the source garment', 'Generate the coverage set', 'Audit hidden or invented details'],
    images: [
      {src: '/articles/img/prompt-recipes/packshot-dress-reference.jpg', alt: 'Source dress used for an Astria packshot example', label: 'Source garment'},
      {src: '/articles/img/prompt-recipes/packshot-dress-result.jpg', alt: 'Generated volumetric dress packshot', label: 'Generated packshot'},
    ],
    workspaceUrl: 'https://www.astria.ai/w/3d-packshots',
    workspaceLabel: 'Inspect 3D Ghost Packshots',
    templateUrl: 'https://www.astria.ai/p/3d-packshots-dress',
    templateLabel: 'Inspect Dress Packshots',
    promptUrl: 'https://www.astria.ai/prompts/40128059?ws=268',
    promptLabel: 'Open the source prompt',
    guideUrl: '/articles/ecommerce-product-photography-prompts',
    guideLabel: 'See the packshot prompt system',
    note: 'This is public Astria workflow evidence, not a same-input benchmark against the other service.',
  },
} satisfies Record<string, EvidenceProfile>;

export type ArticleEvidenceProfile = keyof typeof profiles;

type Props = {
  profile: ArticleEvidenceProfile;
};

function ResourceLink({href, children, kind}: {
  href: string;
  children: React.ReactNode;
  kind?: 'primary' | 'guide';
}) {
  const external = href.startsWith('https://');
  return (
    <a className={kind ? styles[kind] : undefined} href={href} {...(external ? {target: '_blank', rel: 'noreferrer'} : {})}>
      {children}
    </a>
  );
}

export default function ArticleEvidence({profile}: Props) {
  const evidence: EvidenceProfile = profiles[profile];

  return (
    <section className={styles.evidence} aria-label={evidence.title}>
      <header className={styles.header}>
        <p className={styles.eyebrow}>{evidence.eyebrow}</p>
        <h2>{evidence.title}</h2>
        <p>{evidence.summary}</p>
      </header>

      {evidence.images ? (
        <div className={styles.imageRail}>
          {evidence.images.map((image) => (
            <figure key={image.src}>
              <img src={image.src} alt={image.alt} loading="lazy" />
              <figcaption>{image.label}</figcaption>
            </figure>
          ))}
        </div>
      ) : null}

      <ol className={styles.stages}>
        {evidence.stages.map((stage) => <li key={stage}>{stage}</li>)}
      </ol>

      <nav className={styles.actions} aria-label={`${evidence.title} resources`}>
        <ResourceLink href={evidence.workspaceUrl} kind="primary">{evidence.workspaceLabel}</ResourceLink>
        <ResourceLink href={evidence.templateUrl}>{evidence.templateLabel}</ResourceLink>
        {evidence.promptUrl && <ResourceLink href={evidence.promptUrl}>{evidence.promptLabel}</ResourceLink>}
        <ResourceLink href={evidence.guideUrl} kind="guide">{evidence.guideLabel}</ResourceLink>
      </nav>

      <p className={styles.note}>{evidence.note}</p>
    </section>
  );
}
