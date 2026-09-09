import React, {useId, useState} from 'react';
import styles from './styles.module.css';

export type ImageComparisonItem = {
  label: string;
  src: string;
  alt: string;
  verdict?: string;
};

type Props = {
  items: ImageComparisonItem[];
  reference?: ImageComparisonItem;
  title?: string;
  description?: string;
};

export default function ImageModelComparison({
  items,
  reference,
  title = 'Inspect the same product across models',
  description,
}: Props) {
  const id = useId();
  const [mode, setMode] = useState<'grid' | 'scan'>('grid');
  const [leftIndex, setLeftIndex] = useState(0);
  const [rightIndex, setRightIndex] = useState(Math.min(1, items.length - 1));
  const [position, setPosition] = useState(50);

  if (items.length < 2) return null;

  const left = items[leftIndex];
  const right = items[rightIndex];

  const chooseLeft = (index: number) => {
    setLeftIndex(index);
    if (index === rightIndex) setRightIndex((index + 1) % items.length);
  };

  const chooseRight = (index: number) => {
    setRightIndex(index);
    if (index === leftIndex) setLeftIndex((index + items.length - 1) % items.length);
  };

  return (
    <section className={styles.comparison} aria-label={title}>
      <header className={styles.header}>
        <div>
          <h3>{title}</h3>
          {description ? <p>{description}</p> : null}
        </div>
        <div className={styles.modeSwitch} role="group" aria-label="Comparison view">
          <button
            type="button"
            className={mode === 'grid' ? styles.activeMode : undefined}
            aria-pressed={mode === 'grid'}
            onClick={() => setMode('grid')}>
            Side by side
          </button>
          <button
            type="button"
            className={mode === 'scan' ? styles.activeMode : undefined}
            aria-pressed={mode === 'scan'}
            onClick={() => setMode('scan')}>
            Scan line
          </button>
        </div>
      </header>

      {reference ? (
        <figure className={styles.reference}>
          <div className={styles.referenceImage}>
            <img loading="eager" decoding="async" data-no-zoom src={reference.src} alt={reference.alt} />
          </div>
          <figcaption>
            <span>Source product</span>
            <strong>{reference.label}</strong>
            {reference.verdict ? <p>{reference.verdict}</p> : null}
          </figcaption>
        </figure>
      ) : null}

      {mode === 'grid' ? (
        <div className={styles.grid}>
          {items.map((item) => (
            <figure className={styles.card} key={`${item.label}-${item.src}`}>
              <img loading="lazy" decoding="async" data-no-zoom src={item.src} alt={item.alt} />
              <figcaption>
                <strong>{item.label}</strong>
                {item.verdict ? <span>{item.verdict}</span> : null}
              </figcaption>
            </figure>
          ))}
        </div>
      ) : (
        <div className={styles.scanWorkspace}>
          <div className={styles.selectors}>
            <label htmlFor={`${id}-left`}>
              Left side
              <select id={`${id}-left`} value={leftIndex} onChange={(event) => chooseLeft(Number(event.target.value))}>
                {items.map((item, index) => <option value={index} key={`left-${item.label}`}>{item.label}</option>)}
              </select>
            </label>
            <button
              type="button"
              className={styles.swap}
              aria-label="Swap compared models"
              onClick={() => {
                setLeftIndex(rightIndex);
                setRightIndex(leftIndex);
              }}>
              Swap
            </button>
            <label htmlFor={`${id}-right`}>
              Right side
              <select id={`${id}-right`} value={rightIndex} onChange={(event) => chooseRight(Number(event.target.value))}>
                {items.map((item, index) => <option value={index} key={`right-${item.label}`}>{item.label}</option>)}
              </select>
            </label>
          </div>

          <div className={styles.scanStage}>
            <img data-no-zoom src={right.src} alt={right.alt} className={styles.baseImage} />
            <img
              data-no-zoom
              src={left.src}
              alt={left.alt}
              className={styles.overlayImage}
              style={{clipPath: `inset(0 ${100 - position}% 0 0)`}}
            />
            <span className={`${styles.edgeLabel} ${styles.leftLabel}`}>{left.label}</span>
            <span className={`${styles.edgeLabel} ${styles.rightLabel}`}>{right.label}</span>
            <span className={styles.scanLine} style={{left: `${position}%`}} aria-hidden="true">
              <span>↔</span>
            </span>
            <input
              className={styles.range}
              type="range"
              min="0"
              max="100"
              value={position}
              onChange={(event) => setPosition(Number(event.target.value))}
              aria-label={`Reveal ${left.label} over ${right.label}`}
              aria-valuetext={`${position}% ${left.label}, ${100 - position}% ${right.label}`}
            />
          </div>
          <p className={styles.hint}>Drag the line or use the arrow keys to inspect construction, texture, and color.</p>
        </div>
      )}
    </section>
  );
}
