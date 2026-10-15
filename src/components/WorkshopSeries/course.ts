import lessons from './lessons.json';

export function getCourseNavigation(permalink: string) {
  const path = permalink.replace(/\/$/, '');
  const index = lessons.findIndex((lesson) => path.endsWith(`/${lesson.slug}`));
  if (index < 0) return undefined;

  return {
    current: lessons[index],
    position: index + 1,
    total: lessons.length,
    previous: lessons[index - 1],
    next: lessons[index + 1],
  };
}

export type CourseNavigation = NonNullable<ReturnType<typeof getCourseNavigation>>;
