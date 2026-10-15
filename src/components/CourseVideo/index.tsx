import React, {type ReactNode} from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';
import type {CourseNavigation} from '../WorkshopSeries/course';
import styles from './styles.module.css';

export default function CourseVideo({lesson}: {lesson: CourseNavigation['current']}): ReactNode {
  const baseUrl = useBaseUrl('/');
  if (!lesson.videoAvailable) return null;

  return (
    <a
      className={styles.video}
      href={lesson.academyUrl}
      aria-label={`Watch lesson ${lesson.lesson}: ${lesson.shortTitle} in Astria Academy`}>
      <span className={styles.preview}>
        <span className={styles.images} style={{gridTemplateColumns: `repeat(${lesson.videoImages.length}, minmax(0, 1fr))`}}>
          {lesson.videoImages.map((image) => (
            <img
              key={image.src}
              src={`${baseUrl}${image.src.replace(/^\//, '')}`}
              alt=""
              width={image.width}
              height={image.height}
              decoding="async"
              data-no-zoom
            />
          ))}
        </span>
        <span className={styles.play} aria-hidden="true">
          <svg viewBox="0 0 32 32" width="32" height="32" focusable="false">
            <path d="M11 6.5 26 16 11 25.5Z" fill="currentColor" />
          </svg>
        </span>
        <span className={styles.badge} aria-hidden="true">Video lesson</span>
      </span>
      <span className={styles.caption}>
        <strong>Watch lesson {lesson.lesson}</strong>
        <span>Astria Academy <span aria-hidden="true">↗</span></span>
      </span>
    </a>
  );
}
