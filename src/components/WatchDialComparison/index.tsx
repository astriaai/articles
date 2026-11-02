import React from 'react';
import ImageModelComparison from '../ImageModelComparison';
import shots from './shots.json';

export default function WatchDialComparison({shot}: {shot: keyof typeof shots}) {
  const {title, observation, before, after, reference} = shots[shot];
  const prefix = `/articles/img/german-watch-photoshoot/${shot}`;
  return (
    <>
      <ImageModelComparison
        title={title}
        description={observation}
        items={[
          {label: 'Before Lynx', src: `${prefix}-before-dial.webp`, alt: `${title}: dial lettering before Lynx`},
          {label: 'Finished frame', src: `${prefix}-after-dial.webp`, alt: `${title}: dial lettering after Lynx`},
        ]}
      />
      <p><a href={reference}>Product reference</a>{' · '}<a href={before}>Full before frame</a>{' · '}<a href={after}>Full finished frame</a></p>
    </>
  );
}
