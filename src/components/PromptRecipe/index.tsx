import React, {useEffect, useRef, useState} from 'react';
import styles from './styles.module.css';

type RecipeImage = {
  alt: string;
  label: string;
  src: string;
};

type PromptRecipeProps = {
  challenge: string;
  notes: string[];
  prompt: string;
  promptUrl: string;
  primaryActionLabel?: string;
  purpose: string;
  referenceImages: RecipeImage[];
  resultImage: RecipeImage;
  sourceNote?: string;
  specs?: string[];
  templateLabel?: string;
  templateUrl: string;
  title: string;
  vertical: string;
  workspaceLabel?: string;
  workspaceUrl: string;
};

export default function PromptRecipe({
  challenge,
  notes,
  prompt,
  promptUrl,
  primaryActionLabel = 'Open and rerun in Astria',
  purpose,
  referenceImages,
  resultImage,
  sourceNote = 'Reference and result images come from the linked public Astria example.',
  specs = [],
  templateLabel = 'Use the template',
  templateUrl,
  title,
  vertical,
  workspaceLabel = 'View the workspace',
  workspaceUrl,
}: PromptRecipeProps) {
  const [copyState, setCopyState] = useState<'idle' | 'copied' | 'failed'>('idle');
  const promptBlock = useRef<HTMLPreElement | null>(null);
  const resetTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (resetTimer.current) clearTimeout(resetTimer.current);
    };
  }, []);

  async function copyPrompt() {
    const copyWithSelection = () => {
      const field = document.createElement('textarea');
      field.value = prompt;
      field.setAttribute('readonly', '');
      field.style.position = 'fixed';
      field.style.opacity = '0';
      document.body.appendChild(field);
      field.select();

      try {
        if (!document.execCommand('copy')) throw new Error('Copy command unavailable');
      } finally {
        document.body.removeChild(field);
      }
    };

    try {
      if (navigator.clipboard?.writeText) {
        try {
          await navigator.clipboard.writeText(prompt);
        } catch {
          copyWithSelection();
        }
      } else {
        copyWithSelection();
      }
      setCopyState('copied');
    } catch {
      if (promptBlock.current) {
        const range = document.createRange();
        range.selectNodeContents(promptBlock.current);
        const selection = window.getSelection();
        selection?.removeAllRanges();
        selection?.addRange(range);
      }
      setCopyState('failed');
    }

    if (resetTimer.current) clearTimeout(resetTimer.current);
    resetTimer.current = setTimeout(() => setCopyState('idle'), 2400);
  }

  return (
    <section className={styles.recipe} aria-label={`${vertical}: ${title}`}>
      <header className={styles.header}>
        <div>
          <p className={styles.vertical}>{vertical}</p>
          <h3>{title}</h3>
          <p className={styles.purpose}>{purpose}</p>
        </div>
        {specs.length > 0 && (
          <ul className={styles.specs} aria-label="Output specification">
            {specs.map((spec) => (
              <li key={spec}>{spec}</li>
            ))}
          </ul>
        )}
      </header>

      <div className={styles.contactSheet}>
        <div className={styles.references}>
          <p className={styles.mediaLabel}>Reference inputs</p>
          <div
            className={`${styles.referenceGrid} ${
              referenceImages.length === 1 ? styles.singleReference : ''
            }`}>
            {referenceImages.map((image) => (
              <figure key={image.src}>
                <img src={image.src} alt={image.alt} loading="lazy" />
                <figcaption>{image.label}</figcaption>
              </figure>
            ))}
          </div>
        </div>

        <figure className={styles.result}>
          <p className={styles.mediaLabel}>Generated result</p>
          <a href={promptUrl} target="_blank" rel="noreferrer">
            <img src={resultImage.src} alt={resultImage.alt} loading="lazy" />
          </a>
          <figcaption>{resultImage.label}</figcaption>
        </figure>
      </div>

      <div className={styles.promptPanel}>
        <div className={styles.promptHeading}>
          <div>
            <strong>Copy-ready prompt</strong>
            <span>Replace “reference” with your uploaded product or model.</span>
          </div>
          <button type="button" onClick={copyPrompt}>
            {copyState === 'copied'
              ? 'Copied'
              : copyState === 'failed'
                ? 'Prompt selected'
                : 'Copy prompt'}
          </button>
        </div>
        <pre ref={promptBlock}>
          <code>{prompt}</code>
        </pre>
        <span className={styles.copyStatus} aria-live="polite">
          {copyState === 'copied'
            ? 'Prompt copied to the clipboard.'
            : copyState === 'failed'
              ? 'Clipboard access was unavailable. Press Command+C or Ctrl+C to copy the selected prompt.'
              : ''}
        </span>
      </div>

      <div className={styles.review}>
        <div className={styles.challenge}>
          <strong>The challenge</strong>
          <p>{challenge}</p>
        </div>
        <div>
          <strong>Things to notice</strong>
          <ul>
            {notes.map((note) => (
              <li key={note}>{note}</li>
            ))}
          </ul>
        </div>
      </div>

      <nav className={styles.actions} aria-label={`${title} resources`}>
        <a className={styles.primaryAction} href={promptUrl} target="_blank" rel="noreferrer">
          {primaryActionLabel}
        </a>
        <a href={templateUrl} target="_blank" rel="noreferrer">
          {templateLabel}
        </a>
        <a href={workspaceUrl} target="_blank" rel="noreferrer">
          {workspaceLabel}
        </a>
      </nav>
      <p className={styles.sourceLine}>{sourceNote}</p>
    </section>
  );
}
