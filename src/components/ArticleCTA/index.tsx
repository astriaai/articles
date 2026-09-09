import React, {type ReactNode} from 'react';

export default function ArticleCTA(): ReactNode {
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
