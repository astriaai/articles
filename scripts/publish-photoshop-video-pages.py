#!/usr/bin/env python3
"""Publish a reviewed Docusaurus build from a clean gh-pages checkout.

Preserve paths absent from the build, including unrelated historical routes.
Every commit names the generated files explicitly; only new files are staged.
"""
import argparse
import json
import shutil
import subprocess
from pathlib import Path


def git(pages, *args, capture=False):
    return subprocess.run(['git', '-C', str(pages), *args], check=True,
                          stdout=subprocess.PIPE if capture else None)


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument('--build', required=True, type=Path)
    parser.add_argument('--pages', required=True, type=Path)
    parser.add_argument('--message', required=True)
    parser.add_argument('--plan', type=Path)
    parser.add_argument('--push', action='store_true')
    args = parser.parse_args()
    build, pages = args.build.resolve(), args.pages.resolve()
    if not (build / 'index.html').is_file() or not (build / 'sitemap.xml').is_file():
        raise SystemExit('Refusing to publish an incomplete site build')
    if git(pages, 'branch', '--show-current', capture=True).stdout.decode().strip() != 'gh-pages':
        raise SystemExit('Publication checkout must use the gh-pages branch')
    if git(pages, 'status', '--porcelain', capture=True).stdout:
        raise SystemExit('Publication checkout must be clean before copying files')
    if args.plan:
        plan = json.loads(args.plan.read_text())
        new_articles = [article['slug'] for article in plan['articles']
                        if (build / article['slug'] / 'index.html').is_file()
                        and not (pages / article['slug'] / 'index.html').is_file()]
        if len(new_articles) > 1 and plan.get('publication_mode') != 'immediate':
            raise SystemExit('Refusing to release several articles on one day. '
                             'Reschedule the missed dates before retrying: '
                             + ', '.join(new_articles))
    for source in build.rglob('*'):
        if not source.is_file():
            continue
        relative = source.relative_to(build)
        if '.git' in relative.parts or source.is_symlink():
            raise SystemExit(f'Unexpected build path: {relative}')
        target = pages / relative
        target.parent.mkdir(parents=True, exist_ok=True)
        shutil.copy2(source, target)
    new = git(pages, 'ls-files', '--others', '--exclude-standard', '-z', capture=True).stdout
    new_paths = [p.decode() for p in new.split(b'\0') if p]
    if new_paths:
        # The repository permits staging new files owned by this task.
        git(pages, 'add', '--', *new_paths)
    changed = git(pages, 'diff', 'HEAD', '--name-only', '-z', capture=True).stdout
    paths = [p.decode() for p in changed.split(b'\0') if p]
    if not paths:
        print('The reviewed build is already published')
        return
    git(pages, 'commit', '-m', args.message, '--', *paths)
    print(json.dumps({'published_files': len(paths), 'commit':
                     git(pages, 'rev-parse', 'HEAD', capture=True).stdout.decode().strip()}))
    if args.push:
        git(pages, 'push', 'origin', 'HEAD:gh-pages')


if __name__ == '__main__':
    main()
