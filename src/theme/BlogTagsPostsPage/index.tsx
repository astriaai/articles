import React, {type ReactNode} from 'react';
import clsx from 'clsx';
import {
  PageMetadata,
  HtmlClassNameProvider,
  ThemeClassNames,
} from '@docusaurus/theme-common';
import {useBlogTagsPostsPageTitle} from '@docusaurus/theme-common/internal';
import Layout from '@theme/Layout';
import SearchMetadata from '@theme/SearchMetadata';
import Unlisted from '@theme/ContentVisibility/Unlisted';
import type {Props} from '@theme/BlogTagsPostsPage';
import BlogIndex from '@site/src/components/BlogIndex';

function BlogTagsPostsPageMetadata({tag}: Props): ReactNode {
  const title = useBlogTagsPostsPageTitle(tag);
  return (
    <>
      <PageMetadata title={title} description={tag.description} />
      <SearchMetadata tag="blog_tags_posts" />
    </>
  );
}

function BlogTagsPostsPageContent(props: Props): ReactNode {
  const {tag, items, listMetadata} = props;
  return (
    <Layout>
      <BlogIndex
        items={items}
        listMetadata={listMetadata}
        activeLabel={tag.label}
        eyebrow="The Astria blog"
        title={tag.label}
        description={tag.description}
        banner={tag.unlisted ? <Unlisted /> : undefined}
      />
    </Layout>
  );
}

export default function BlogTagsPostsPage(props: Props): ReactNode {
  return (
    <HtmlClassNameProvider
      className={clsx(
        ThemeClassNames.wrapper.blogPages,
        ThemeClassNames.page.blogTagPostListPage,
      )}>
      <BlogTagsPostsPageMetadata {...props} />
      <BlogTagsPostsPageContent {...props} />
    </HtmlClassNameProvider>
  );
}
