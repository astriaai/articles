// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const {themes: prismThemes} = require('prism-react-renderer');

const lightCodeTheme = prismThemes.vsDark;
const darkCodeTheme = prismThemes.dracula;

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Astria articles',
  tagline: 'Fine-tuning and high quality image generation',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://www.astria.ai',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/articles/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'astriaai', // Usually your GitHub org/user name.
  projectName: 'articles', // Usually your repo name.

  onBrokenLinks: 'throw',
  trailingSlash: true,

  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  plugins: [
    require.resolve('docusaurus-plugin-image-zoom'),
    [
      '@docusaurus/plugin-client-redirects',
      {
        // Legacy article URLs kept alive after re-slugging.
        redirects: [
          {from: '/fine-tuning-flux.1', to: '/fine-tuning-flux'},
          {from: '/on-brand', to: '/ai-headshots-for-teams'},
          {from: '/virtual-tryon', to: '/virtual-try-on-for-fashion-brands'},
        ],
      },
    ],
  ],

  // Fraunces is the display face for the blog index (hero + featured titles).
  stylesheets: [
    'https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400..700&display=swap',
  ],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        // The docs plugin stays enabled only because @easyops-cn/docusaurus-search-local's
        // SearchBar calls useActiveVersion() unconditionally and throws without it.
        // Its single page is `unlisted` (noindex + out of the sitemap) and is not indexed
        // by search. Product documentation lives at https://docs.astria.ai/.
        docs: {
          sidebarCollapsed: false,
          sidebarPath: require.resolve('./sidebars.js'),
        },
        blog: {
          showReadingTime: true,
          blogSidebarCount: 0,
          blogTitle: 'Notes on AI fashion production',
          blogDescription: 'Comparisons, techniques, and field notes for teams producing on-brand fashion imagery with AI.',

          path: 'blog',
          routeBasePath: '/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        gtag: {
          trackingID: 'G-PR5YMLZ2Y1',
          anonymizeIP: false, // Should IPs be anonymized?
        },
        sitemap: {
          lastmod: 'date',
          changefreq: 'weekly',
          priority: 0.5,
          ignorePatterns: ['/articles/search/**', '/articles/docs/**'],
          filename: 'sitemap.xml',
        },
      }),
    ],
  ],

  themes: [
    [
      require.resolve('@easyops-cn/docusaurus-search-local'),
      /** @satisfies {import('@easyops-cn/docusaurus-search-local').PluginOptions} */
      ({
        hashed: 'filename',
        indexDocs: false,
        indexBlog: true,
        blogRouteBasePath: '/',
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig & {zoom: object}} */
    ({
      zoom: {
        selector: '.markdown img:not([data-no-zoom])',
        background: {
          light: 'rgba(255, 255, 255, 0.94)',
          dark: 'rgba(16, 18, 27, 0.94)',
        },
        config: {
          margin: 32,
          scrollOffset: 40,
        },
      },
      image: 'img/high-quality-finetuning.jpg',
      navbar: {
        title: 'Astria',
        // The brand (logo + title) leaves the docs site for the main product
        // site; the articles index gets its own navbar item below.
        logo: {
          alt: 'Astria',
          src: 'img/logo@2x.png',
          href: 'https://www.astria.ai/',
          target: '_self',
        },
        items: [
          // {
          //   type: 'docSidebar',
          //   sidebarId: 'tutorialSidebar',
          //   position: 'left',
          //   label: 'Use cases',
          // },
          {to: '/', label: 'Articles', position: 'left'},
          // {
          //   href: 'https://github.com/facebook/docusaurus',
          //   label: 'GitHub',
          //   position: 'right',
          // },
        ],
      },
      // Mirrors the main site footer (sdbooth app/views/layouts/application.html.slim).
      footer: {
        style: 'dark',
        logo: {
          alt: 'Astria - Tailor-made AI',
          src: 'img/logo@2x.png',
          href: 'https://www.astria.ai/',
          height: 40,
        },
        links: [
          {
            title: 'Astria',
            items: [
              {
                html: '<span style="opacity:.6">Tailor-made AI</span>',
              },
              {
                label: 'Email support',
                href: 'mailto:support@astria.ai',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/Astria_AI',
              },
            ],
          },
          {
            title: 'Company',
            items: [
              {
                label: 'Terms & Conditions',
                href: 'https://www.astria.ai/terms',
              },
              {
                label: 'Content Policy',
                href: 'https://www.astria.ai/content',
              },
              {
                label: 'Privacy',
                href: 'https://www.astria.ai/privacy',
              },
              {
                label: 'Pricing',
                href: 'https://www.astria.ai/pricing',
              },
              {
                label: 'Affiliate',
                href: 'https://www.astria.ai/affiliate',
              },
              {
                label: 'Creative Partner Program',
                href: 'https://www.astria.ai/creators',
              },
              {
                label: 'Support',
                href: 'mailto:support@astria.ai',
              },
            ],
          },
          {
            title: 'Resources',
            items: [
              {
                label: 'Academy',
                href: 'https://www.astria.ai/academy',
              },
              {
                label: 'Workspaces Gallery',
                href: 'https://www.astria.ai/gallery/workspaces',
              },
              {
                label: '3D - Packshots',
                href: 'https://www.astria.ai/w/3d-packshots',
              },
              {
                label: 'Blog',
                href: 'https://blog.astria.ai/',
              },
              {
                label: 'FAQ',
                href: 'https://docs.astria.ai/docs/use-cases/faq/',
              },
              {
                label: 'API',
                href: 'https://docs.astria.ai/docs/api/tune/create',
              },
            ],
          },
          {
            title: 'Product',
            items: [
              {
                label: 'Photoshop plugin',
                href: 'https://www.astria.ai/nano-banana-photoshop',
              },
              {
                label: 'Gallery',
                href: 'https://www.astria.ai/gallery?branch=flux1',
              },
              {
                label: 'Models',
                href: 'https://www.astria.ai/gallery/tunes',
              },
              {
                label: 'Docs',
                href: 'https://docs.astria.ai/',
              },
            ],
          },
        ],
        copyright: `© 2022-${new Date().getFullYear()} Astria`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
