// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "My Site",
  tagline: "Dinosaurs are cool",
  url: "https://ragnarokresearchlab.github.io",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "throw",
  favicon: "img/favicon-with-transparency.png",
  organizationName: "RagnarokResearchLab", // Usually your GitHub org/user name.
  projectName: "ragnarokresearchlab.github.io", // Usually your repo name.
  trailingSlash: true,
  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          path: "docs",
          routeBasePath: "/",
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: "Ragnarok Research Lab",
        logo: {
          alt: "Ragnarok Research Lab Logo",
          src: "img/logo-with-more-space-around.png",
        },
        items: [
          {
            href: "/game-mechanics",
            label: "Game Mechanics",
            position: "left",
          },
          {
            href: "https://discord.gg/7RFdMNrySy",
            label: "Discord",
            position: "right",
          },
          {
            href: "https://github.com/RagnarokResearchLab",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Documentation",
            items: [
              {
                label: "Game Mechanics",
                to: "/game-mechanics",
              },
              {
                label: "Glossary",
                to: "/glossary",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "Discord",
                href: "https://discord.gg/7RFdMNrySy",
              },
              {
                label: "GitHub",
                href: "https://github.com/RagnarokResearchLab",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "GitHub",
                href: "https://github.com/facebook/docusaurus",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Ragnarok Research Lab authors and contributors.<br/>All trademarks referenced herein are the properties of their respective owners.`,
      },
      colorMode: {
        disableSwitch: true,
        respectPrefersColorScheme: false,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;