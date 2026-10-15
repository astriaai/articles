import React, {type ReactNode} from 'react';
import Head from '@docusaurus/Head';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import {useBlogPost} from '@docusaurus/plugin-content-blog/client';
import BlogPostStructuredData from '@theme-original/BlogPostPage/StructuredData';

type ArticleSchemas = {
  faq?: Array<{
    '@type': 'Question';
    name: string;
    acceptedAnswer: {'@type': 'Answer'; text: string};
  }>;
  howTo?: Array<{name: string; text: string; anchor: string}>;
};

export default function StructuredData(): ReactNode {
  const {metadata, frontMatter} = useBlogPost();
  const {siteConfig} = useDocusaurusContext();
  const {faq, howTo} = (frontMatter as typeof frontMatter & {
    articleSchemas?: ArticleSchemas;
  }).articleSchemas ?? {};
  const url = `${siteConfig.url}${metadata.permalink.replace(/\/+$/, '')}/`;
  const schemas = [
    ...(faq ? [{
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      '@id': `${url}#frequently-asked-questions`,
      url,
      mainEntity: faq,
    }] : []),
    ...(howTo ? [{
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      '@id': `${url}#howto`,
      url,
      name: metadata.title,
      description: metadata.description,
      step: howTo.map(({anchor, ...step}, index) => ({
        '@type': 'HowToStep',
        position: index + 1,
        ...step,
        url: `${url}#${anchor}`,
      })),
    }] : []),
  ];

  return <>
    <BlogPostStructuredData />
    <Head>
      {schemas.map(schema => <script key={schema['@type']} type="application/ld+json">
        {JSON.stringify(schema).replace(/</g, '\\u003c')}
      </script>)}
    </Head>
  </>;
}
