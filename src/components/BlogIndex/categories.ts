// Tabs shown on the blog index. Keep in sync with blog/tags.yml:
// each tag gets a tab, and `to` must match the tag's permalink under /tags/.
export type BlogCategory = {
  label: string;
  to: string;
};

export const blogCategories: BlogCategory[] = [
  {label: 'All articles', to: '/'},
  {label: 'Comparisons', to: '/tags/comparisons/'},
];
