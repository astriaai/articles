import React, {type ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import BlogListPaginator from '@theme/BlogListPaginator';
import type {Props as BlogListPageProps} from '@theme/BlogListPage';
import {blogCategories} from './categories';
import styles from './styles.module.css';

type BlogItems = BlogListPageProps['items'];
type BlogContent = BlogItems[number]['content'];

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

export default function BlogIndex({
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
  const featured = showFeatured && listMetadata.page === 1 ? items[0] : null;
  const gridItems = featured ? items.slice(1) : items;
  return (
    <div className={styles.page}>
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
          <div className={styles.grid}>
            {gridItems.map(({content}) => (
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
        <div className={styles.paginator}>
          <BlogListPaginator metadata={listMetadata} />
        </div>
      </div>
    </div>
  );
}
