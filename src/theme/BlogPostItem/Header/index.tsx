import React, {type ReactNode} from 'react';
import {useBlogPost} from '@docusaurus/plugin-content-blog/client';
import BlogPostItemHeaderTitle from '@theme/BlogPostItem/Header/Title';
import BlogPostItemHeaderInfo from '@theme/BlogPostItem/Header/Info';
import BlogPostItemHeaderAuthors from '@theme/BlogPostItem/Header/Authors';
import Tag from '@theme/Tag';
import CourseVideo from '@site/src/components/CourseVideo';
import {getCourseNavigation} from '@site/src/components/WorkshopSeries/course';
import styles from './styles.module.css';

// Article pages lead with topics; listing pages retain their author display.
export default function BlogPostItemHeader(): ReactNode {
  const {metadata, isBlogPostPage} = useBlogPost();
  const {tags} = metadata;
  const course = isBlogPostPage ? getCourseNavigation(metadata.permalink) : undefined;

  return (
    <header>
      <BlogPostItemHeaderTitle />
      <BlogPostItemHeaderInfo />
      {!isBlogPostPage && <BlogPostItemHeaderAuthors />}
      {isBlogPostPage && tags.length > 0 && (
        <nav className={styles.topics} aria-label="Article topics">
          <span className={styles.topicLabel}>Topics</span>
          <ul className={styles.tags}>
            {tags.map((tag) => (
              <li key={tag.permalink}>
                <Tag {...tag} />
              </li>
            ))}
          </ul>
        </nav>
      )}
      {course?.current.videoAvailable && <CourseVideo lesson={course.current} />}
    </header>
  );
}
