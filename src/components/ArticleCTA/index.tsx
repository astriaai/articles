import React, {type ReactNode} from 'react';
import {useBlogPost} from '@docusaurus/plugin-content-blog/client';

export default function ArticleCTA(): ReactNode {
  const {metadata} = useBlogPost();
  if (metadata.tags.some(({label}) => label === 'Photoshop')) {
    return (
      <aside className="astria-article-cta astria-article-cta--default" aria-label="Edit in Photoshop with Astria">
        <div className="astria-article-cta__mark">
          <img src="/articles/img/logo@2x.png" alt="" />
        </div>
        <p className="astria-article-cta__eyebrow">Astria Photoshop plugin</p>
        <h2 className="astria-article-cta__title">Explore your next image edit</h2>
        <p className="astria-article-cta__copy">Start with your image, add references and refine the result on Photoshop layers.</p>
        <div className="astria-article-cta__actions">
          <a className="astria-article-cta__button astria-article-cta__button--primary" href="https://www.astria.ai/nano-banana-photoshop">
            <span>Get the Photoshop plugin</span><span aria-hidden="true">→</span>
          </a>
          <a className="astria-article-cta__button astria-article-cta__button--secondary" href="https://www.astria.ai/pricing">
            <span>View current pricing</span><span aria-hidden="true">→</span>
          </a>
        </div>
      </aside>
    );
  }
  return (
    <aside
      className="astria-article-cta astria-article-cta--default"
      aria-label="Start creating with Astria">
      <div className="astria-article-cta__mark">
        <img src="/articles/img/logo@2x.png" alt="" />
      </div>
      <p className="astria-article-cta__eyebrow">
        Fashion production workspace
      </p>
      <h2 className="astria-article-cta__title">
        Create your next campaign with Astria
      </h2>
      <p className="astria-article-cta__copy">
        Generate fashion visuals from your products, or start with a
        production-ready template.
      </p>
      <div className="astria-article-cta__actions">
        <a
          className="astria-article-cta__button astria-article-cta__button--primary"
          href="/prompts">
          <span>Start creating</span>
          <span aria-hidden="true">→</span>
        </a>
        <a
          className="astria-article-cta__button astria-article-cta__button--secondary"
          href="/gallery/workspaces">
          <span>Explore workspaces</span>
          <span aria-hidden="true">→</span>
        </a>
      </div>
    </aside>
  );
}
