import React from 'react';
import styles from './styles.module.css';

type Capture = {
  src: string;
  alt: string;
  caption: string;
  width: number;
  height: number;
};

type Props = {
  before: Capture;
  after: Capture;
  layers?: Capture;
};

function CaptureImage({capture}: {capture: Capture}) {
  return (
    <a href={capture.src} target="_blank" rel="noopener noreferrer" title="Open the captured image at full size">
      <img
        src={capture.src}
        alt={capture.alt}
        width={capture.width}
        height={capture.height}
        loading="lazy"
        decoding="async"
        style={{maxWidth: capture.width}}
      />
    </a>
  );
}

export default function VideoEditComparison({before, after, layers}: Props) {
  return (
    <section className={styles.comparison} aria-label="Before and after from the demonstration video">
      <div className={styles.pair}>
        {([{label: 'Before', capture: before}, {label: 'After', capture: after}]).map(({label, capture}) => (
          <figure className={styles.card} key={label} data-source-reference={label === 'After' ? before.src : undefined}>
            <figcaption className={styles.label}>{label}</figcaption>
            <CaptureImage capture={capture} />
            <p className={styles.caption}>{capture.caption}</p>
          </figure>
        ))}
      </div>
      <p className={styles.hint}>Select an image to enlarge it. Frames are cropped from the original video.</p>
      {layers ? (
        <figure className={styles.layers}>
          <figcaption className={styles.label}>Photoshop layers</figcaption>
          <CaptureImage capture={layers} />
          <p className={styles.caption}>{layers.caption}</p>
        </figure>
      ) : null}
    </section>
  );
}
