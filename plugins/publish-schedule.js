function publishableBlogPosts({blogPosts}, now = new Date()) {
  return blogPosts.filter(({metadata}) => metadata.date <= now);
}

module.exports = publishableBlogPosts;
