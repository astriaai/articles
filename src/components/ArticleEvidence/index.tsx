import React from 'react';
import styles from './styles.module.css';

type EvidenceImage = {
  alt: string;
  label: string;
  src: string;
};

type EvidenceProfile = {
  title: string;
  summary: string;
  links: {href: string; label: string}[];
  note?: string;
} & (
  | {images: [EvidenceImage, EvidenceImage]; motion?: never}
  | {images?: never; motion: {still: EvidenceImage; src: string; label: string}}
);

const fashionImages: [EvidenceImage, EvidenceImage] = [
  {src: '/articles/img/prompt-recipes/fashion-shirt-reference.jpg', alt: 'Brown graphic sweatshirt product reference on white', label: 'Original sweatshirt photo'},
  {src: '/articles/img/prompt-recipes/fashion-catalog-result.jpg', alt: 'Generated model wearing the referenced sweatshirt with a skirt, socks, and shoes', label: 'AI image using this sweatshirt and other product photos'},
];

const packshotImages: [EvidenceImage, EvidenceImage] = [
  {src: '/articles/img/prompt-recipes/packshot-dress-reference.jpg', alt: 'Original dress product reference', label: 'Original dress photo'},
  {src: '/articles/img/prompt-recipes/packshot-dress-result.jpg', alt: 'Generated dress packshot with volume and no visible mannequin', label: 'AI-generated dress packshot'},
];

const fashionLinks = [
  {href: 'https://www.astria.ai/prompts/35818293?ws=54', label: 'View this generation'},
  {href: 'https://www.astria.ai/p/basic-shirt', label: 'Try the shirt template'},
];

const packshotLinks = [
  {href: 'https://www.astria.ai/prompts/40128059?ws=268', label: 'View this generation'},
  {href: 'https://www.astria.ai/p/3d-packshots-dress', label: 'Try the dress template'},
];

const profiles = {
  fashion: {
    title: 'From a product photo to an image on a model',
    summary: 'The sweatshirt photo supplies the garment details. Astria combines it with the other clothing references to create the styled look shown here.',
    images: fashionImages,
    links: fashionLinks,
  },
  lookbook: {
    title: 'From a skirt photo to a styled look',
    summary: 'This look combines the skirt with separate photos of the sweatshirt, socks, and shoes. Compare the skirt’s pleats, length, and color with the original.',
    images: [
      {src: '/articles/img/prompt-recipes/fashion-skirt-reference.jpg', alt: 'Grey pleated skirt product reference', label: 'Original skirt photo'},
      {src: '/articles/img/prompt-recipes/fashion-catalog-result.jpg', alt: 'Generated model wearing the referenced skirt with a sweatshirt, socks, and shoes', label: 'AI image using the skirt and other product photos'},
    ],
    links: fashionLinks,
  },
  packshot: {
    title: 'From a dress photo to a packshot',
    summary: 'The generated image gives the dress volume without a visible mannequin. Compare the neckline, seams, and hem with the original photo.',
    images: packshotImages,
    links: packshotLinks,
    note: 'Details hidden in the original photo still need checking against additional product photos.',
  },
  jewelry: {
    title: 'The original ring and its AI product image',
    summary: 'Compare the band, setting, and stones in the generated close-up with the original ring photo.',
    images: [
      {src: '/articles/img/prompt-recipes/jewelry-ring-reference.jpg', alt: 'Original ring reference showing its setting and band', label: 'Original ring photo'},
      {src: '/articles/img/prompt-recipes/jewelry-ring-result.jpg', alt: 'AI-generated close-up of the referenced ring', label: 'AI-generated ring close-up'},
    ],
    links: [
      {href: 'https://www.astria.ai/prompts/33498743?ws=297', label: 'View this generation'},
      {href: 'https://www.astria.ai/p/jewelry-ring', label: 'Try the ring template'},
    ],
  },
  video: {
    title: 'From a fashion photo to a nine-second video',
    summary: 'The brief asks the model to walk in, pause with a hand on her hip, and walk past the camera. Press play to see the generated result.',
    motion: {
      still: {
        src: '/articles/video/model-benchmarks/2026-09/live-workspace/seedance-2-fast-first-frame.jpg',
        alt: 'Starting image of a model in a navy pinstriped dress and sandals in a grey studio',
        label: 'Starting image',
      },
      src: '/articles/video/model-benchmarks/2026-09/live-workspace/seedance-2-fast-720p-live-runway.mp4',
      label: 'AI video · 9 seconds · Seedance 2 Fast · no audio',
    },
    links: [
      {href: 'https://www.astria.ai/prompts/46608981', label: 'View this generation'},
      {href: '/articles/video-model-comparison-calibration', label: 'Compare video models'},
    ],
  },
  channel: {
    title: 'A product photo and an AI packshot for the listing',
    summary: 'This dress example shows how a product photo becomes a clean packshot. Check the garment details and your store’s image requirements before using the result.',
    images: packshotImages,
    links: packshotLinks,
  },
  comparisonFashion: {
    title: 'An Astria example: product photo to model image',
    summary: 'The sweatshirt on the left is one of the product photos used to create the styled look on the right.',
    images: fashionImages,
    links: fashionLinks,
    note: 'This shows an Astria result. The other platform was not tested with these same photos.',
  },
  comparisonPackshot: {
    title: 'An Astria example: dress photo to packshot',
    summary: 'Compare the original dress with the generated image, especially the neckline, seams, and hem.',
    images: packshotImages,
    links: packshotLinks,
    note: 'This shows an Astria result. The other service was not tested with this same photo.',
  },
} satisfies Record<string, EvidenceProfile>;

export type ArticleEvidenceProfile = keyof typeof profiles;

type Props = {
  profile: ArticleEvidenceProfile;
};

export default function ArticleEvidence({profile}: Props) {
  const evidence: EvidenceProfile = profiles[profile];

  return (
    <section className={styles.example} aria-label={evidence.title}>
      <h2 className={styles.title}>{evidence.title}</h2>
      <p className={styles.summary}>{evidence.summary}</p>

      <div className={`${styles.media}${evidence.motion ? ` ${styles.motion}` : ''}`}>
        {evidence.motion ? (
          <>
            <figure>
              <img src={evidence.motion.still.src} alt={evidence.motion.still.alt} loading="lazy" />
              <figcaption>{evidence.motion.still.label}</figcaption>
            </figure>
            <figure>
              <video
                src={evidence.motion.src}
                poster={evidence.motion.still.src}
                controls
                playsInline
                preload="none"
                aria-label={evidence.motion.label}
              >
                <a href={evidence.motion.src}>Watch the generated video</a>
              </video>
              <figcaption>{evidence.motion.label}</figcaption>
            </figure>
          </>
        ) : evidence.images.map((image) => (
          <figure key={image.src}>
            <img src={image.src} alt={image.alt} loading="lazy" />
            <figcaption>{image.label}</figcaption>
          </figure>
        ))}
      </div>

      {evidence.note && <p className={styles.note}>{evidence.note}</p>}
      <p className={styles.links}>
        {evidence.links.map(({href, label}) => (
          <a key={href} href={href} {...(href.startsWith('https://') ? {target: '_blank', rel: 'noreferrer'} : {})}>{label}</a>
        ))}
      </p>
    </section>
  );
}
