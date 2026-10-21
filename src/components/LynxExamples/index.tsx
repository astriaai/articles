import React from 'react';
import ImageModelComparison from '../ImageModelComparison';
import groups from './examples.json';
import styles from './styles.module.css';

type Props = {category: string};

export default function LynxExamples({category}: Props) {
  const group = groups.find(item => item.name === category);
  const variant = group?.variants[0];
  if (!group || !variant) return null;
  return (
    <section className={styles.group} aria-label={`${group.name} example`}>
      <figure className={styles.reference}>
        <a href={group.reference}>
          <img src={group.reference} alt={`${group.name} original synthetic product reference: ${group.detail.toLowerCase()}`} loading="lazy" width="1792" height="2400" />
        </a>
        <figcaption>
          <strong>Product reference · {group.name}</strong>
          <p>{group.detail}. Original fictional demonstration design; this product-only image is the input used for the on-model example below.</p>
          <p><a href={group.referenceGallery}>View product reference in Gallery</a></p>
        </figcaption>
      </figure>
      <div className={styles.variant}>
        <h4>{variant.label} · {variant.resolution} setting</h4>
        <p className={styles.observation}>{variant.observation}</p>
        <p><a href={variant.gallery}>View example in Gallery</a></p>
        <ImageModelComparison
          title={`${group.name} · matched detail`}
          description="The same relative crop from this prompt’s before and finished frames. Switch to Scan line to inspect the difference."
          items={[
            {label: 'Before Lynx', src: variant.beforeDetail, alt: `${group.name}: ${variant.label.toLowerCase()}, detail before Lynx`},
            {label: 'Finished frame', src: variant.afterDetail, alt: `${group.name}: ${variant.label.toLowerCase()}, detail in the finished frame`},
          ]}
        />
        <p className={styles.fullFrameLinks}>
          <a href={variant.before}>View complete before frame</a>
          {' · '}
          <a href={variant.after}>View complete finished frame</a>
        </p>
      </div>
    </section>
  );
}
