#!/usr/bin/env python3
"""Check built HTML/sitemaps, optionally public robots and raw HTTP responses.

Run after yarn build:
  python3 scripts/audit-search-access.py --output /tmp/search-access.json
  python3 scripts/audit-search-access.py --live --output /tmp/search-access-live.json

Uses the Python standard library; no browser or JavaScript execution.
"""
import argparse
from collections import Counter
from datetime import datetime, timezone
from html.parser import HTMLParser
import json
from pathlib import Path
import re
from urllib.parse import unquote, urlsplit
from urllib.request import Request, urlopen
from urllib.robotparser import RobotFileParser
import xml.etree.ElementTree as ET

ORIGIN = "https://www.astria.ai"
BOTS = ("GPTBot", "OAI-SearchBot", "ClaudeBot", "PerplexityBot")
KEY_PATHS = (
    "/", "/articles/", "/articles/features/", "/articles/ai-lookbook-guide/",
    "/articles/how-to-create-a-lookbook/", "/articles/create-first-ai-lookbook-astria/",
)
NS = "http://www.sitemaps.org/schemas/sitemap/0.9"
HOWTO_PATHS = {"/articles/how-to-create-a-lookbook/", "/articles/create-first-ai-lookbook-astria/"}


def normalized(value):
    return re.sub(r"\s+", " ", value).strip()


def in_visible_text(value, visible):
    if normalized(value) in visible:
        return True
    # Captions and subheadings can sit between successive instruction paragraphs.
    # Require every schema token, in order, while allowing those visible inserts.
    available = iter(re.findall(r"\w+|[^\w\s]", visible))
    return all(any(candidate == token for candidate in available)
               for token in re.findall(r"\w+|[^\w\s]", value))


class Page(HTMLParser):
    def __init__(self, html):
        super().__init__(convert_charrefs=True)
        self.schemas, self.errors, self.text, self.main = [], [], [], []
        self.ids, self.robots = set(), []
        self.canonical, self.ld, self.buffer = None, False, ""
        self.skip, self.in_main = 0, 0
        self.feed(html)

    def handle_starttag(self, tag, attrs):
        attrs = dict(attrs)
        if tag in ('p', 'li', 'h1', 'h2', 'h3', 'h4', 'td', 'th', 'br', 'div', 'section'):
            self.handle_data(' ')
        if attrs.get("id"):
            self.ids.add(attrs["id"])
        if tag in ("script", "style"):
            self.skip += 1
        if tag in ("main", "article"):
            self.in_main += 1
        if tag == "script" and attrs.get("type") == "application/ld+json":
            self.ld, self.buffer = True, ""
        if tag == "link" and attrs.get("rel") == "canonical":
            self.canonical = attrs.get("href")
        if tag == "meta" and attrs.get("name", "").lower() in ("robots", "bingbot"):
            self.robots.append(attrs.get("content", "").lower())

    def handle_data(self, value):
        if self.ld:
            self.buffer += value
        if not self.skip:
            self.text.append(value)
            if self.in_main:
                self.main.append(value)

    def handle_endtag(self, tag):
        if tag == "script" and self.ld:
            try:
                self.schemas.append(json.loads(self.buffer))
            except ValueError as error:
                self.errors.append(f"Invalid JSON-LD: {error}")
            self.ld = False
        if tag in ("script", "style"):
            self.skip = max(0, self.skip - 1)
        if tag in ("main", "article"):
            self.in_main = max(0, self.in_main - 1)
        if tag in ('p', 'li', 'h1', 'h2', 'h3', 'h4', 'td', 'th', 'div', 'section'):
            self.handle_data(' ')


def schema_nodes(value):
    if isinstance(value, list):
        for child in value:
            yield from schema_nodes(child)
    elif isinstance(value, dict):
        yield value
        for child in value.values():
            if isinstance(child, (dict, list)):
                yield from schema_nodes(child)


def check_page(html, url, check_text=True):
    page = Page(html)
    errors = page.errors
    # Restrict content checks to the main/article element so a JS-only content
    # shell cannot pass merely because it renders a substantial navbar/footer.
    visible = normalized("".join(page.main))
    if check_text and (not visible or (urlsplit(url).path in KEY_PATHS and len(visible) < 100)):
        errors.append("Main text missing from raw HTML")
    if page.canonical != url:
        errors.append(f"Canonical differs: {page.canonical}")
    if any(re.search(r"\b(noindex|none)\b", rule) for rule in page.robots):
        errors.append("Page is noindex")
    counts = Counter()
    for node in schema_nodes(page.schemas):
        kind = node.get("@type")
        if kind not in ("FAQPage", "HowTo"):
            continue
        counts[kind] += 1
        if kind == "FAQPage":
            questions = node.get("mainEntity")
            if not isinstance(questions, list) or not questions:
                errors.append("FAQPage has no questions")
                continue
            for question in questions:
                answer = question.get("acceptedAnswer", {})
                if question.get("@type") != "Question" or answer.get("@type") != "Answer":
                    errors.append("FAQPage must contain Question/Answer nodes")
                for label, value in (("question", question.get("name")), ("answer", answer.get("text"))):
                    if not isinstance(value, str) or not value.strip():
                        errors.append(f"FAQ {label} is empty")
                    elif not in_visible_text(value, visible):
                        errors.append(f"FAQ {label} differs from visible text: {question.get('name')}")
        else:
            if not node.get("name"):
                errors.append("HowTo is missing its name")
            steps = node.get("step")
            if not isinstance(steps, list) or len(steps) < 2:
                errors.append("HowTo has fewer than two steps")
                continue
            for step in steps:
                if step.get("@type") != "HowToStep":
                    errors.append("HowTo step has wrong type")
                for label in ("name", "text"):
                    value = step.get(label)
                    if not isinstance(value, str) or not value.strip() or not in_visible_text(value, visible):
                        errors.append(f"HowTo {label} missing from visible text")
                step_url = urlsplit(step.get("url", ""))
                if step_url._replace(fragment="").geturl() != url or unquote(step_url.fragment) not in page.ids:
                    errors.append(f"HowTo step URL has no matching anchor: {step.get('url')}")
    if counts["FAQPage"] > 1 or counts["HowTo"] > 1:
        errors.append("Duplicate FAQPage/HowTo")
    if "Frequently asked questions" in visible and not counts["FAQPage"]:
        errors.append("Visible FAQ has no FAQPage schema")
    if urlsplit(url).path in HOWTO_PATHS and not counts["HowTo"]:
        errors.append("Step-by-step guide has no HowTo schema")
    return {"url": url, "main_text_characters": len(visible), "schemas": dict(counts), "errors": errors}


def check_sitemap(data):
    root = ET.fromstring(data)
    if root.tag not in (f"{{{NS}}}sitemapindex", f"{{{NS}}}urlset"):
        raise ValueError(f"Invalid sitemap root/namespace: {root.tag}")
    kind = root.tag.split("}")[1]
    entry_tag = "sitemap" if kind == "sitemapindex" else "url"
    entries = root.findall(f"{{{NS}}}{entry_tag}")
    if not entries or len(entries) > 50000 or len(data) > 50 * 1024 * 1024:
        raise ValueError("Empty or oversized sitemap")
    locs = []
    for entry in entries:
        loc = entry.findtext(f"{{{NS}}}loc", "")
        parts = urlsplit(loc)
        if parts.scheme != "https" or not parts.hostname or parts.fragment:
            raise ValueError(f"Invalid sitemap URL: {loc}")
        locs.append(loc)
        lastmod = entry.findtext(f"{{{NS}}}lastmod")
        if lastmod:
            datetime.fromisoformat(lastmod.replace("Z", "+00:00"))
    if len(locs) != len(set(locs)):
        raise ValueError("Duplicate sitemap URLs")
    return kind, locs


def fetch(url, agent="AstriaSearchAccessAudit/1.0"):
    with urlopen(Request(url, headers={"User-Agent": agent}), timeout=30) as response:
        if response.status != 200:
            raise ValueError(f"{url}: HTTP {response.status}")
        return response.read(), response.headers, response.url


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--build", type=Path, default=Path("build"))
    parser.add_argument("--live", action="store_true")
    parser.add_argument("--output", type=Path)
    args = parser.parse_args()
    report = {"checked_at": datetime.now(timezone.utc).isoformat(), "errors": [], "built_pages": []}
    errors = report["errors"]
    kind, locs = check_sitemap((args.build / "sitemap.xml").read_bytes())
    report["built_sitemap"] = {"type": kind, "urls": len(locs)}
    for url in locs:
        parts = urlsplit(url)
        if parts.netloc != "www.astria.ai" or not parts.path.startswith("/articles/"):
            errors.append(f"Unexpected article sitemap URL: {url}")
            continue
        relative = unquote(parts.path.removeprefix("/articles/"))
        file = args.build / relative / "index.html"
        if not file.is_file():
            errors.append(f"Sitemap URL has no HTML file: {url}")
            continue
        result = check_page(file.read_text(), url)
        report["built_pages"].append(result)
        errors.extend(f"{url}: {error}" for error in result["errors"])
    # Also inspect unlisted articles and ensure redirect/search noindex pages do
    # not leak into the sitemap; schema checks cover every generated HTML file.
    schema_counts = Counter()
    for file in args.build.rglob("*.html"):
        page = Page(file.read_text())
        errors.extend(f"{file}: {error}" for error in page.errors)
        if page.canonical and page.canonical not in locs and not page.robots:
            result = check_page(file.read_text(), page.canonical, check_text=False)
            errors.extend(f"{file}: {error}" for error in result['errors'])
        schema_counts.update(node.get("@type") for node in schema_nodes(page.schemas)
                             if node.get("@type") in ("FAQPage", "HowTo"))
    report["built_schema_counts"] = dict(schema_counts)
    for path in KEY_PATHS[1:]:
        if ORIGIN + path not in locs:
            errors.append(f"Key page missing from sitemap: {path}")
    report["built_passed"] = not errors
    if args.live:
        live_error_start = len(errors)
        robots, _, _ = fetch(ORIGIN + "/robots.txt")
        rules = RobotFileParser()
        rules.parse(robots.decode().splitlines())
        advertised = rules.site_maps() or []
        report["robots_sitemaps"] = advertised
        if ORIGIN + "/sitemap.xml" not in advertised:
            errors.append("Main sitemap missing from robots.txt")
        report["live_sitemaps"] = []
        for url in (ORIGIN + "/sitemap.xml", ORIGIN + "/articles/sitemap.xml"):
            data, _, _ = fetch(url)
            kind, entries = check_sitemap(data)
            report["live_sitemaps"].append({"url": url, "type": kind, "entries": len(entries)})
            if kind == "sitemapindex" and ORIGIN + "/articles/sitemap.xml" not in entries:
                errors.append("Articles sitemap missing from main sitemap index")
        report["live_pages"], report["bot_access"] = [], []
        for path in KEY_PATHS:
            url = ORIGIN + path
            data, headers, final_url = fetch(url)
            result = check_page(data.decode(), url)
            if final_url != url or "noindex" in headers.get("X-Robots-Tag", "").lower():
                result["errors"].append("Redirected canonical URL or HTTP noindex header")
            report["live_pages"].append(result)
            errors.extend(f"{url}: {error}" for error in result["errors"])
            for bot in BOTS:
                allowed = rules.can_fetch(bot, url)
                try:
                    body, bot_headers, _ = fetch(url, bot)
                    bot_page = Page(body.decode())
                    accessible = len(normalized("".join(bot_page.main))) >= 100
                    accessible &= "noindex" not in bot_headers.get("X-Robots-Tag", "").lower()
                except Exception as error:
                    accessible = False
                    errors.append(f"{bot} {url}: {error}")
                report["bot_access"].append({"bot": bot, "url": url, "robots_allowed": allowed,
                                             "http_content_accessible": accessible})
                if not allowed or not accessible:
                    errors.append(f"{bot} cannot crawl {url}")
        report["live_passed"] = len(errors) == live_error_start
    report["passed"] = not errors
    if args.output:
        args.output.write_text(json.dumps(report, indent=2) + "\n")
    print(json.dumps({key: value for key, value in report.items()
                      if key not in ("built_pages", "live_pages", "bot_access")}, indent=2))
    raise SystemExit(0 if report["passed"] else 1)


if __name__ == "__main__":
    main()
