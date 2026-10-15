import React, {type ReactNode} from 'react';
import {useBlogPost} from '@docusaurus/plugin-content-blog/client';
import BlogPostItemHeaderTitle from '@theme/BlogPostItem/Header/Title';
import BlogPostItemHeaderInfo from '@theme/BlogPostItem/Header/Info';
import BlogPostItemHeaderAuthors from '@theme/BlogPostItem/Header/Authors';
import Tag from '@theme/Tag';
import styles from './styles.module.css';

// Repeats the post's tags under the byline so readers see the topic before
// scrolling; the footer keeps its own tag list.
export default function BlogPostItemHeader(): ReactNode {
  const {metadata, isBlogPostPage} = useBlogPost();
  const {tags} = metadata;

  return (
    <header>
      <BlogPostItemHeaderTitle />
      <BlogPostItemHeaderInfo />
      <BlogPostItemHeaderAuthors />
      {isBlogPostPage && tags.length > 0 && (
        <ul className={styles.tags} aria-label="Tags">
          {tags.map((tag) => (
            <li key={tag.permalink}>
              <Tag {...tag} />
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
