import React, {type ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import blogStyles from '../BlogIndex/styles.module.css';
import styles from './styles.module.css';
import lessons from './lessons.json';

function LessonCard({lesson}: {lesson: (typeof lessons)[number]}): ReactNode {
  const href = useBaseUrl(`/${lesson.slug}/`);
  const image = useBaseUrl(lesson.image);
  const date = new Intl.DateTimeFormat('en', {
    month: 'short', day: 'numeric', year: 'numeric', timeZone: 'UTC',
  }).format(new Date(`${lesson.date}T00:00:00Z`));

  return (
    <article className={blogStyles.card}>
      <Link to={href} className={styles.preview} tabIndex={-1} aria-hidden="true">
        <img src={image} alt={lesson.alt} width={lesson.width} height={lesson.height} loading="lazy" />
      </Link>
      <div className={blogStyles.cardBody}>
        <span className={styles.lesson}>Lesson {lesson.lesson}</span>
        <h3 className={blogStyles.cardTitle}>
          <Link to={href}>{lesson.title}</Link>
        </h3>
        <p className={blogStyles.cardDescription}>{lesson.overview}</p>
        <time dateTime={lesson.date} className={styles.date}>{date}</time>
      </div>
    </article>
  );
}

export default function WorkshopSeries({series}: {series: '1' | '2'}): ReactNode {
  return (
    <div className={clsx(blogStyles.page, styles.series)}>
      <div className={blogStyles.grid}>
        {lessons.filter((lesson) => lesson.lesson.startsWith(`${series}.`)).map((lesson) => (
          <LessonCard key={lesson.lesson} lesson={lesson} />
        ))}
      </div>
    </div>
  );
}
