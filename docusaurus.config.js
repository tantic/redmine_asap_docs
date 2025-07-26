// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Redmine Asap Docs',
  tagline: 'Documentation about Redmine Asap suite and Redmine in general',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://tantic.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/redmine_asap_docs/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'tantic', // Usually your GitHub org/user name.
  projectName: 'redmine_asap_docs', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
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
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/tantic/redmine_asap_docs/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/redmine_asap_suite.png',
      navbar: {
        title: 'Redmine Asap Docs',
        logo: {
          alt: 'My Site Logo',
          src: 'img/redmine_asap_suite.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'themeSidebar',
            position: 'left',
            label: 'Theme',
          },
          {
            type: 'docSidebar',
            sidebarId: 'userFeaturesSidebar',
            position: 'left',
            label: 'User features',
          },
          {
            type: 'docSidebar',
            sidebarId: 'redmineSidebar',
            position: 'left',
            label: 'Redmine',
            to: '/docs/redmine',
          },
          {
            href: 'https://github.com/tantic/redmine_asap_docs',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Theme',
            items: [
              {
                label: 'Theme',
                to: '/docs/theme/intro',
              },
            ],
          },
          {
            title: 'User features',
            items: [
              {
                label: 'User features',
                to: '/docs/user-features/intro',
              },
            ],
          },
          {
            title: 'Redmine',
            items: [
              {
                label: 'Redmine',
                to: '/docs/redmine/intro',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/tantic/redmine_asap_docs',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Redmine Asap Docs, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
