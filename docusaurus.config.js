// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/vsDark');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Astria articles',
  tagline: 'Fine-tuning and high quality image generation',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://www.astria.ai',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/articles',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'astriaai', // Usually your GitHub org/user name.
  projectName: 'astria-articles', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  trailingSlash: true,

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarCollapsed: false,
          sidebarPath: require.resolve('./sidebars.js')
          // path: 'docs',
          // routeBasePath: '/',

          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/astriaai/astria-articles/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          blogSidebarCount: 'ALL',
          blogSidebarTitle: 'All our posts',
          blogDescription: 'Learn about fine-tuning and AI photography with consistent characters and high quality images.',

          path: 'blog',
          routeBasePath: '/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        gtag: {
          trackingID: 'G-PR5YMLZ2Y1',
          anonymizeIP: false, // Should IPs be anonymized?
        }
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/high-quality-finetuning.jpg',
      navbar: {
        title: 'Astria articles',
        logo: {
          alt: 'Astria',
          src: 'img/logo@2x.png',
        },
        items: [
          // {
          //   type: 'docSidebar',
          //   sidebarId: 'tutorialSidebar',
          //   position: 'left',
          //   label: 'Use cases',
          // },
          // {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://www.astria.ai/',
            label: 'Home',
            // position: 'right',
          },
          // {
          //   href: 'https://github.com/facebook/docusaurus',
          //   label: 'GitHub',
          //   position: 'right',
          // },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          // {
          //   title: 'Docs',
          //   items: [
          //     {
          //       label: 'Use cases',
          //       to: '/docs/category/use-cases',
          //     },
          //     {
          //       label: 'Features',
          //       to: '/docs/category/features',
          //     },
          //   ],
          // },
          {
            title: 'Community',
            items: [
              {
                label: 'Discord',
                href: 'https://discord.gg/MtW9gBgsMX',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/Astria_AI',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Gallery',
                to: 'https://www.astria.ai/gallery',
              },
              {
                label: 'Community examples',
                href: 'https://astria.ai/community',
              },
              {
                label: 'Home',
                href: 'https://astria.ai/',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Astria, Inc.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
