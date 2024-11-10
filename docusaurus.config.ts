import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Le latin',
  tagline: 'Bienvenue! Au collège rosa bonheur',
  favicon: 'img/favicon.ico',

  url: 'https://ladomusweb.vercel.app/',
  baseUrl: '/',

  organizationName: 'Dada972dev',
  projectName: 'La domus web',

  onBrokenLinks: 'ignore',
  onBrokenMarkdownLinks: 'ignore',

  i18n: {
    defaultLocale: 'fr',
    locales: ['fr'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl:
            'https://github.com/Paladium-Developpement/PaladiumBedrock.Wiki/tree/main/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',
    announcementBar: {
      id: "prerelease",
      content: 'The Wiki is currently in development, some pages may be incomplete or missing.',
      backgroundColor: "#df4b30",
      textColor: "#ffffff",
      isCloseable: true,
    },
    navbar: {
      title: 'Le Latin',
      logo: {
        alt: '',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Les infos',
        },
      ],
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;