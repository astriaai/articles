import React, {useEffect, useRef, useState} from 'react';
import styles from './styles.module.css';

type CopyPromptProps = {
  note?: string;
  prompt: string;
  sourceLabel?: string;
  sourceUrl?: string;
  templateUrl?: string;
  title: string;
  why?: string;
};

export default function CopyPrompt({
  note = 'Replace “reference” with the product, model, or scene you upload.',
  prompt,
  sourceLabel = 'Inspect the public example',
  sourceUrl,
  templateUrl,
  title,
  why,
}: CopyPromptProps) {
  const [copyState, setCopyState] = useState<'idle' | 'copied' | 'failed'>('idle');
  const promptBlock = useRef<HTMLPreElement | null>(null);
  const resetTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => () => {
    if (resetTimer.current) clearTimeout(resetTimer.current);
  }, []);

  async function copyPrompt() {
    const legacyCopy = () => {
      const field = document.createElement('textarea');
      field.value = prompt;
      field.setAttribute('readonly', '');
      field.style.position = 'fixed';
      field.style.opacity = '0';
      document.body.appendChild(field);
      field.select();

      try {
        if (!document.execCommand('copy')) throw new Error('Copy unavailable');
      } finally {
        document.body.removeChild(field);
      }
    };

    try {
      if (navigator.clipboard?.writeText) {
        try {
          await navigator.clipboard.writeText(prompt);
        } catch {
          legacyCopy();
        }
      } else {
        legacyCopy();
      }
      setCopyState('copied');
    } catch {
      const range = document.createRange();
      if (promptBlock.current) {
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
    <section className={styles.prompt} aria-label={title}>
      <div className={styles.heading}>
        <div>
          <h3>{title}</h3>
          {why && <p>{why}</p>}
        </div>
        <button type="button" onClick={copyPrompt}>
          {copyState === 'copied'
            ? 'Copied'
            : copyState === 'failed'
              ? 'Prompt selected'
              : 'Copy prompt'}
        </button>
      </div>
      <pre ref={promptBlock}><code>{prompt}</code></pre>
      <div className={styles.footer}>
        <span>{copyState === 'copied'
          ? 'Prompt copied to the clipboard.'
          : copyState === 'failed'
            ? 'Press Command+C or Ctrl+C to copy the selected prompt.'
            : note}</span>
        <nav aria-label={`${title} resources`}>
          {sourceUrl && <a href={sourceUrl} target="_blank" rel="noreferrer">{sourceLabel}</a>}
          {templateUrl && <a href={templateUrl} target="_blank" rel="noreferrer">Use the template</a>}
        </nav>
      </div>
    </section>
  );
}
