import React, {type ReactNode} from 'react';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

export default function CourseBanner(): ReactNode {
  const courseUrl = useBaseUrl('/workshops/');
  const firstLook = useBaseUrl('/img/workshops/first-ai-lookbook/first-look-01.webp');
  const newProduct = useBaseUrl('/img/workshops/reuse-lookbook-creative-direction-templates/new-shirt-result.webp');

  return (
    <section className={styles.banner} aria-labelledby="astria-course-title">
      <div className={styles.body}>
        <p className={styles.label}>Astria course</p>
        <h2 id="astria-course-title">Your first AI lookbook</h2>
        <p className={styles.description}>
          Build a lookbook, refine its styling and turn it into reusable templates for your collection.
        </p>
        <Link to={courseUrl} className={styles.cta}>
          Explore all 15 lessons <span aria-hidden="true">→</span>
        </Link>
      </div>
      <Link to={courseUrl} className={styles.visual} tabIndex={-1} aria-hidden="true">
        <span className={styles.images}>
          <img src={firstLook} width="1792" height="2400" alt="" decoding="async" />
          <img src={newProduct} width="1792" height="2400" alt="" decoding="async" />
        </span>
      </Link>
    </section>
  );
}
