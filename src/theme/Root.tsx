import React from 'react';
import ImageLightbox from '@site/src/components/ImageLightbox';

export default function Root({children}: {children: React.ReactNode}) {
  return (
    <>
      {children}
      <ImageLightbox />
    </>
  );
}
