import React, {useEffect, useRef, type ReactNode} from 'react';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import lessons from '../WorkshopSeries/lessons.json';
import type {CourseNavigation} from '../WorkshopSeries/course';
import styles from './styles.module.css';

export default function CoursePlaylist({course}: {course: CourseNavigation}): ReactNode {
  const baseUrl = useBaseUrl('/');
  const playlist = useRef<HTMLElement>(null);

  useEffect(() => {
    const nav = playlist.current;
    const scrollArea = nav?.parentElement;
    const active = nav?.querySelector<HTMLElement>('[aria-current="page"]');
    const revealCurrent = () => {
      if (scrollArea && active && scrollArea.clientHeight > 0) {
        scrollArea.scrollTop = active.offsetTop - scrollArea.offsetTop
          - scrollArea.clientHeight / 2 + active.offsetHeight / 2;
      }
    };
    revealCurrent();
    const details = nav?.closest('details');
    details?.addEventListener('toggle', revealCurrent);
    return () => details?.removeEventListener('toggle', revealCurrent);
  }, [course.current.slug]);

  return (
    <nav ref={playlist} className={styles.playlist} aria-label="Course playlist">
      <Link className={styles.courseTitle} to={`${baseUrl}workshops/`}>AI lookbook course</Link>
      <p className={styles.position}>Lesson {course.position} of {course.total}</p>
      {[
        {number: '1', title: 'Your first AI lookbook'},
        {number: '2', title: 'Reusable lookbook templates'},
      ].map((series) => (
        <section key={series.number} className={styles.series}>
          <h2 className={styles.seriesTitle}>Series {series.number}: {series.title}</h2>
          <ol className={styles.lessons}>
            {lessons.filter((lesson) => lesson.lesson.startsWith(`${series.number}.`)).map((lesson) => (
              <li key={lesson.slug}>
                <Link
                  className={styles.lesson}
                  to={`${baseUrl}${lesson.slug}/`}
                  aria-current={lesson.slug === course.current.slug ? 'page' : undefined}>
                  <span className={styles.number}>{lesson.lesson}</span>
                  <span>{lesson.shortTitle}</span>
                </Link>
              </li>
            ))}
          </ol>
        </section>
      ))}
    </nav>
  );
}
