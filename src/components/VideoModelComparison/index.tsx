import React from 'react';
import styles from './styles.module.css';

export type VideoComparisonItem = {
  label: string;
  src: string;
  meta?: string;
  poster?: string;
  promptUrl?: string;
};

type Props = {
  items: VideoComparisonItem[];
  title?: string;
  description?: string;
  poster?: string;
};

export default function VideoModelComparison({
  items,
  title = 'Side-by-side video comparison',
  description,
  poster,
}: Props) {
  if (!items.length) return null;

  return (
    <section className={styles.comparison} aria-label={title}>
      <header className={styles.header}>
        <p className={styles.eyebrow}>Matched-input benchmark</p>
        <h2>{title}</h2>
        {description ? <p>{description}</p> : null}
      </header>

      <div className={styles.grid}>
        {items.map((item, index) => (
          <figure className={styles.card} key={`${item.label}-${item.src}`}>
            <video
              src={item.src}
              poster={item.poster ?? poster}
              controls
              playsInline
              preload="metadata"
              aria-label={`${item.label} comparison clip`}
            />
            <figcaption>
              <strong>{item.label}</strong>
              {item.meta ? <span>{item.meta}</span> : null}
              {item.promptUrl ? <a href={item.promptUrl} target="_blank" rel="noreferrer">Open source prompt</a> : null}
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
