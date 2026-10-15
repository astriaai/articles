import React, {useCallback, useEffect, useId, useRef, useState, type ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import BlogListPaginator from '@theme/BlogListPaginator';
import type {Props as BlogListPageProps} from '@theme/BlogListPage';
import {blogCategories} from './categories';
import styles from './styles.module.css';

type BlogItems = BlogListPageProps['items'];
type BlogContent = {
  metadata: Pick<BlogItems[number]['content']['metadata'],
    'title' | 'permalink' | 'description' | 'date' | 'readingTime' | 'authors' | 'tags'>;
  frontMatter: {image?: string};
};

type IndexPage = {
  page: number;
  permalink: string;
  nextPage?: string;
  items: BlogContent[];
};

// Expose only card data in each static page so loading more articles never needs
// to download or execute their MDX modules.
function indexPage(items: BlogItems, metadata: BlogIndexProps['listMetadata']): IndexPage {
  return {
    page: metadata.page,
    permalink: metadata.permalink,
    nextPage: metadata.nextPage,
    items: items.map(({content: {metadata: post, frontMatter}}) => ({
      metadata: {
        title: post.title,
        permalink: post.permalink,
        description: post.description,
        date: post.date,
        readingTime: post.readingTime,
        authors: post.authors,
        tags: post.tags,
      },
      frontMatter: {image: (frontMatter as {image?: string}).image},
    })),
  };
}

export type BlogIndexProps = {
  items: BlogItems;
  listMetadata: BlogListPageProps['metadata'];
  activeLabel: string;
  eyebrow: string;
  title: string;
  description?: string;
  showFeatured?: boolean;
  banner?: ReactNode;
};

function useFormattedDate(isoDate: string): string {
  const {
    i18n: {currentLocale},
  } = useDocusaurusContext();
  return new Intl.DateTimeFormat(currentLocale, {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
    timeZone: 'UTC',
  }).format(new Date(isoDate));
}

function readingTimeLabel(minutes: number | undefined): string | null {
  if (!minutes) {
    return null;
  }
  return `${Math.max(1, Math.ceil(minutes))} min read`;
}

function excerpt(text: string | undefined, maxLength: number): string {
  if (!text) {
    return '';
  }
  if (text.length <= maxLength) {
    return text;
  }
  return `${text.slice(0, maxLength).replace(/\s+\S*$/, '')}…`;
}

function CategoryTabs({activeLabel}: {activeLabel: string}): ReactNode {
  const baseUrl = useBaseUrl('/');
  return (
    <nav className={styles.tabs} aria-label="Blog categories">
      {blogCategories.map((category) => {
        const isActive = category.label === activeLabel;
        return (
          <Link
            key={category.label}
            to={`${baseUrl.replace(/\/$/, '')}${category.to}`}
            className={clsx(styles.tab, isActive && styles.tabActive)}
            aria-current={isActive ? 'page' : undefined}>
            {category.label}
          </Link>
        );
      })}
    </nav>
  );
}

function CoverImage({
  content,
  className,
}: {
  content: BlogContent;
  className: string;
}): ReactNode {
  const {metadata, frontMatter} = content;
  const image = useBaseUrl((frontMatter as {image?: string}).image ?? '');
  if ((frontMatter as {image?: string}).image) {
    return (
      <div className={clsx(styles.media, className)}>
        <img src={image} alt="" loading="lazy" />
      </div>
    );
  }
  return (
    <div className={clsx(styles.media, styles.mediaFallback, className)} aria-hidden="true">
      <span>{metadata.title.charAt(0)}</span>
    </div>
  );
}

function Byline({content}: {content: BlogContent}): ReactNode {
  const {metadata} = content;
  const formattedDate = useFormattedDate(metadata.date);
  const author = metadata.authors[0];
  return (
    <div className={styles.byline}>
      {author?.imageURL && (
        <span className={styles.avatar}>
          <img src={author.imageURL} alt="" loading="lazy" />
        </span>
      )}
      {author?.name && <span className={styles.authorName}>{author.name}</span>}
      <time dateTime={metadata.date} className={styles.date}>
        {formattedDate}
      </time>
    </div>
  );
}

function CardMeta({content}: {content: BlogContent}): ReactNode {
  const {metadata} = content;
  const tag = metadata.tags[0];
  const reading = readingTimeLabel(metadata.readingTime);
  return (
    <div className={styles.cardMeta}>
      {tag && (
        <Link to={tag.permalink} className={styles.chip}>
          {tag.label}
        </Link>
      )}
      {reading && <span className={styles.readingTime}>{reading}</span>}
    </div>
  );
}

function FeaturedPost({content}: {content: BlogContent}): ReactNode {
  const {metadata} = content;
  return (
    <article className={styles.featured}>
      <div className={styles.featuredBody}>
        <CardMeta content={content} />
        <h2 className={styles.featuredTitle}>
          <Link to={metadata.permalink}>{metadata.title}</Link>
        </h2>
        <p className={styles.featuredDescription}>
          {excerpt(metadata.description, 220)}
        </p>
        <Byline content={content} />
      </div>
      <Link
        to={metadata.permalink}
        className={styles.featuredMediaLink}
        tabIndex={-1}
        aria-hidden="true">
        <CoverImage content={content} className={styles.featuredMedia} />
      </Link>
    </article>
  );
}

function PostCard({content}: {content: BlogContent}): ReactNode {
  const {metadata} = content;
  return (
    <article className={styles.card}>
      <Link
        to={metadata.permalink}
        className={styles.cardMediaLink}
        tabIndex={-1}
        aria-hidden="true">
        <CoverImage content={content} className={styles.cardMedia} />
      </Link>
      <div className={styles.cardBody}>
        <CardMeta content={content} />
        <h2 className={styles.cardTitle}>
          <Link to={metadata.permalink}>{metadata.title}</Link>
        </h2>
        <p className={styles.cardDescription}>
          {excerpt(metadata.description, 150)}
        </p>
        <Byline content={content} />
      </div>
    </article>
  );
}

function BlogIndexFeed({
  items,
  listMetadata,
  activeLabel,
  eyebrow,
  title,
  description,
  showFeatured = false,
  banner,
}: BlogIndexProps): ReactNode {
  const allArticlesUrl = useBaseUrl('/');
  const feedId = useId();
  const [additionalItems, setAdditionalItems] = useState<BlogContent[]>([]);
  const [nextPage, setNextPage] = useState(listMetadata.nextPage);
  const [loading, setLoading] = useState(false);
  const [failed, setFailed] = useState(false);
  const [enhanced, setEnhanced] = useState(false);
  const sentinel = useRef<HTMLDivElement>(null);
  const request = useRef<AbortController | null>(null);
  const currentPage = useRef(listMetadata.page);

  useEffect(() => {
    setEnhanced(true);
    return () => request.current?.abort();
  }, []);

  const loadMore = useCallback(async () => {
    if (!nextPage || request.current) {
      return;
    }
    const controller = new AbortController();
    request.current = controller;
    setLoading(true);
    setFailed(false);
    try {
      const response = await fetch(nextPage, {signal: controller.signal});
      if (!response.ok) {
        throw new Error('Could not load articles');
      }
      const document = new DOMParser().parseFromString(await response.text(), 'text/html');
      const data = document.querySelector('script[data-blog-index]')?.textContent;
      const page: IndexPage | undefined = data ? JSON.parse(data) : undefined;
      if (!page || page.page !== currentPage.current + 1 || page.permalink !== nextPage ||
          !Array.isArray(page.items) || !page.items.every((content) =>
            content?.metadata && typeof content.metadata.permalink === 'string' &&
            typeof content.metadata.title === 'string' &&
            Number.isFinite(Date.parse(content.metadata.date)) &&
            Array.isArray(content.metadata.authors) && Array.isArray(content.metadata.tags) &&
            content.frontMatter &&
            (!content.frontMatter.image || typeof content.frontMatter.image === 'string'))) {
        throw new Error('Invalid article index');
      }
      if (controller.signal.aborted) {
        return;
      }
      setAdditionalItems((previous) => {
        const seen = new Set([...items.map(({content}) => content.metadata.permalink),
          ...previous.map((content) => content.metadata.permalink)]);
        return [...previous, ...page.items.filter((content) => {
          const permalink = content.metadata.permalink;
          if (seen.has(permalink)) {
            return false;
          }
          seen.add(permalink);
          return true;
        })];
      });
      currentPage.current = page.page;
      setNextPage(page.nextPage);
    } catch {
      if (!controller.signal.aborted) {
        setFailed(true);
      }
    } finally {
      if (!controller.signal.aborted) {
        request.current = null;
        setLoading(false);
      }
    }
  }, [items, nextPage]);

  useEffect(() => {
    if (!enhanced || !nextPage || loading || failed || !sentinel.current ||
        typeof IntersectionObserver === 'undefined') {
      return;
    }
    const observer = new IntersectionObserver((entries) => {
      if (entries.some((entry) => entry.isIntersecting)) {
        void loadMore();
      }
    }, {rootMargin: '600px 0px'});
    observer.observe(sentinel.current);
    return () => observer.disconnect();
  }, [enhanced, nextPage, loading, failed, loadMore]);

  const featured = showFeatured && listMetadata.page === 1 ? items[0] : null;
  const gridItems = [
    ...(featured ? items.slice(1) : items).map(({content}) => content),
    ...additionalItems,
  ];
  return (
    <div className={styles.page}>
      <script
        type="application/json"
        data-blog-index
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(indexPage(items, listMetadata)).replace(/</g, '\\u003c'),
        }}
      />
      <div className={styles.wrap}>
        {banner}
        <header className={styles.hero}>
          <p className={styles.eyebrow}>{eyebrow}</p>
          <h1 className={styles.title}>{title}</h1>
          {description && <p className={styles.subtitle}>{description}</p>}
        </header>
        <CategoryTabs activeLabel={activeLabel} />
        {featured && <FeaturedPost content={featured.content} />}
        {gridItems.length > 0 ? (
          <div id={feedId} className={styles.grid} aria-busy={loading}>
            {gridItems.map((content) => (
              <PostCard key={content.metadata.permalink} content={content} />
            ))}
          </div>
        ) : (
          !featured && (
            <div className={styles.empty}>
              <p>No articles in this category yet.</p>
              <Link to={allArticlesUrl}>Browse all articles</Link>
            </div>
          )
        )}
        {enhanced && (nextPage || additionalItems.length > 0) && (
          <div ref={sentinel} className={styles.loadMore}>
            <p role="status" className={styles.loadStatus}>
              {loading ? 'Loading more articles…' : failed
                ? 'Articles could not be loaded. Please try again.'
                : !nextPage && additionalItems.length > 0 ? 'You’ve reached the end.' : ''}
            </p>
            {nextPage && (
              <button
                type="button"
                className={styles.loadButton}
                aria-controls={feedId}
                disabled={loading}
                onClick={() => void loadMore()}>
                {failed ? 'Try again' : 'Load more articles'}
              </button>
            )}
            {failed && <Link to={nextPage}>Open next page</Link>}
          </div>
        )}
        {(!enhanced || listMetadata.previousPage) && (
          <div className={styles.paginator}>
            <BlogListPaginator metadata={{...listMetadata, nextPage: enhanced ? undefined : nextPage}} />
          </div>
        )}
      </div>
    </div>
  );
}

export default function BlogIndex(props: BlogIndexProps): ReactNode {
  // Category and pagination navigation must start a fresh feed and cancel any
  // request still in flight for the previous route.
  return <BlogIndexFeed key={props.listMetadata.permalink} {...props} />;
}
