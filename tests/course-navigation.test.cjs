const assert = require('node:assert/strict');
const {test} = require('node:test');
const fs = require('node:fs');
const path = require('node:path');
const Module = require('node:module');
const ts = require('typescript');
const React = require('react');
const {renderToStaticMarkup} = require('react-dom/server');

const root = path.resolve(__dirname, '..');
const lessons = require('../src/components/WorkshopSeries/lessons.json');

function loadComponent(relativePath) {
  const filename = path.join(root, relativePath);
  const compiled = new Module(filename, module);
  compiled.filename = filename;
  compiled.paths = module.paths;
  const originalRequire = compiled.require.bind(compiled);
  compiled.require = id => {
    if (id.endsWith('.css')) return {};
    if (id === '@docusaurus/Link') {
      return ({to, children, ...props}) => React.createElement('a', {...props, href: to}, children);
    }
    if (id === '@docusaurus/useBaseUrl') return value => `/articles/${value.replace(/^\//, '')}`;
    if (id === '@theme/Layout') return ({children}) => children;
    if (id === '../CoursePlaylist') return loadComponent('src/components/CoursePlaylist/index.tsx');
    return originalRequire(id);
  };
  compiled._compile(ts.transpileModule(fs.readFileSync(filename, 'utf8'), {
    compilerOptions: {jsx: ts.JsxEmit.React, module: ts.ModuleKind.CommonJS, esModuleInterop: true},
  }).outputText, filename);
  return compiled.exports;
}

const {getCourseNavigation} = loadComponent('src/components/WorkshopSeries/course.ts');
const Playlist = loadComponent('src/components/CoursePlaylist/index.tsx').default;
const {CoursePaginator} = loadComponent('src/components/CourseLayout/index.tsx');
const courseAt = index => getCourseNavigation(`/articles/${lessons[index].slug}/`);

test('course titles include lesson numbers and use Course instead of Guides', () => {
  assert.deepEqual(lessons.map(lesson => lesson.lesson), [
    '1.1', '1.2', '1.3', '1.4', '1.5', '1.6', '1.7', '1.8', '1.9',
    '2.1', '2.2', '2.3', '2.4', '2.5', '2.6',
  ]);
  for (const lesson of lessons) {
    const article = fs.readFileSync(path.join(root, 'blog', `${lesson.slug}.md`), 'utf8');
    const title = JSON.parse(article.match(/^title: (.+)$/m)[1]);
    assert.equal(title, lesson.title);
    assert.ok(title.startsWith(`${lesson.lesson}: `));
    assert.match(article, /^tags: \[course\]$/m);
    assert.ok(article.includes(`date: ${lesson.date}\n`));
  }
});

test('course navigation follows lesson order across series and stops at course boundaries', () => {
  assert.equal(courseAt(0).previous, undefined);
  assert.equal(courseAt(0).next.lesson, '1.2');
  assert.equal(courseAt(8).next.lesson, '2.1');
  assert.equal(courseAt(9).previous.lesson, '1.9');
  assert.equal(courseAt(14).next, undefined);
  assert.equal(getCourseNavigation('/articles/ai-lookbook-guide/'), undefined);
});

test('playlist links every lesson in order and marks only the current lesson', () => {
  for (const index of [0, 3, 9, 14]) {
    const html = renderToStaticMarkup(React.createElement(Playlist, {course: courseAt(index)}));
    assert.equal((html.match(/aria-current="page"/g) || []).length, 1);
    assert.match(html, /aria-label="Course playlist"/);
    const links = [...html.matchAll(/href="([^"]+)"/g)].map(match => match[1]);
    assert.deepEqual(links, ['/articles/workshops/', ...lessons.map(lesson => `/articles/${lesson.slug}/`)]);
    assert.ok(html.includes(`aria-current="page" href="/articles/${lessons[index].slug}/"`));
  }
});

test('course pagination only links adjacent lessons and uses lesson labels', () => {
  for (let index = 0; index < lessons.length; index++) {
    const course = courseAt(index);
    const html = renderToStaticMarkup(React.createElement(CoursePaginator, {course}));
    const links = [...html.matchAll(/href="([^"]+)"/g)].map(match => match[1]);
    assert.deepEqual(links, [course.previous, course.next].filter(Boolean).map(lesson => `/articles/${lesson.slug}/`));
    assert.doesNotMatch(html, /Newer post|Older post/);
    assert.equal(html.includes('Previous lesson'), index > 0);
    assert.equal(html.includes('Next lesson'), index < lessons.length - 1);
  }
});
