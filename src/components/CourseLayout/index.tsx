import React, {type ReactNode} from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import CoursePlaylist from '../CoursePlaylist';
import type {CourseNavigation} from '../WorkshopSeries/course';
import styles from './styles.module.css';

export function CoursePaginator({course}: {course: CourseNavigation}): ReactNode {
  const baseUrl = useBaseUrl('/');
  return (
    <nav className={styles.pagination} aria-label="Course lesson navigation">
      {course.previous && (
        <Link to={`${baseUrl}${course.previous.slug}/`} rel="prev">
          <span>Previous lesson</span>
          <strong>{course.previous.lesson}: {course.previous.shortTitle}</strong>
        </Link>
      )}
      {course.next && (
        <Link className={styles.next} to={`${baseUrl}${course.next.slug}/`} rel="next">
          <span>Next lesson</span>
          <strong>{course.next.lesson}: {course.next.shortTitle}</strong>
        </Link>
      )}
    </nav>
  );
}

export default function CourseLayout({course, children}: {
  course: CourseNavigation;
  children: ReactNode;
}): ReactNode {
  return (
    <Layout>
      <div className={`container ${styles.layout}`}>
        <main className={styles.content} style={{paddingRight: 0}}>{children}</main>
        <aside className={styles.rail} aria-label="Course navigation">
          <div className={styles.desktop}><CoursePlaylist course={course} /></div>
          <details key={course.current.slug} className={styles.mobile}>
            <summary>Course playlist <span>Lesson {course.current.lesson}</span></summary>
            <div className={styles.mobilePlaylist}><CoursePlaylist course={course} /></div>
          </details>
        </aside>
      </div>
    </Layout>
  );
}
