import type { GatsbyConfig } from 'gatsby';
import { I18NextContext } from 'gatsby-plugin-react-i18next/dist/types';

const url = `https://nt.syskrack.org`;

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Naturalmente Tecnologici 2023 - NT`,
    siteUrl: url,
    description: `L'evento si propone di essere occasione di ritrovo della community di Syskrack nonché strumento di disseminazione culturale sul territorio.`,
    keywords: 'naturalmente, tecnologici, evento, futuro',
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    'gatsby-plugin-sass',
    'gatsby-plugin-image',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Naturalmente Tecnologici',
        short_name: 'NT',
        lang: 'it',
        background_color: '#025300',
        theme_color: '#e98a15',
        // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
        // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
        display: 'standalone',
        icon: 'src/images/favicon/favicon.png', //This path is relative to the root of the site.
        icons: [
          {
            src: `src/images/favicon/android-chrome-192x192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `src/images/favicon/android-chrome-512x512.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
          {
            src: `src/images/favicon/favicon-32x32.png`,
            sizes: `32x32`,
            type: `image/png`,
          },
          {
            src: `src/images/favicon/favicon-16x16.png`,
            sizes: `16x16`,
            type: `image/png`,
          },
        ],
        // An optional attribute which provides support for CORS check.
        // If you do not provide a crossOrigin option, it will skip CORS for manifest.
        // Any invalid keyword or empty string defaults to `anonymous`
        crossOrigin: `use-credentials`,
      },
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: url,
        policy: [{ userAgent: '*', allow: '/' }],
        sitemap: url + '/sitemap-index.xml',
      },
    },
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: url,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/images/',
      },
      __key: 'images',
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'assets',
        path: './src/assets/',
      },
      __key: 'assets',
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /assets/,
          omitKeys: ['xmlnsDc', 'xmlnsCc', 'xmlnsRdf', 'xmlnsSvg', 'xmlnsSodipodi', 'xmlnsInkscape', 'id'],
        },
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/locales`,
        name: `locale`,
      },
    },
    {
      resolve: `gatsby-plugin-react-i18next`,
      options: {
        localeJsonSourceName: `locale`, // name given to `gatsby-source-filesystem` plugin.
        languages: [`en`, `it`],
        defaultLanguage: `it`,
        siteUrl: url,
        // if you are using trailingSlash gatsby config include it here, as well (the default is 'always')
        trailingSlash: 'always',
        // you can pass any i18next options
        i18nextOptions: {
          interpolation: {
            escapeValue: false, // not needed for react as it escapes by default
          },
          keySeparator: false,
          nsSeparator: false,
        },
        pages: [
          // {
          //   matchPath: '/:lang?/blog/:uid',
          //   getLanguageFromPath: true,
          //   excludeLanguages: ['es'],
          // },
          // {
          //   matchPath: '/preview',
          //   languages: ['en'],
          // },
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-google-tagmanager',
      options: {
        id: 'GTM-KLQBPFW',
        includeInDevelopment: false,
        routeChangeEventName: 'ROUTE_CHANGE_EVENT',
        enableWebVitalsTracking: true,
      },
    },
    {
      resolve: 'gatsby-plugin-sitemap',
      options: {
        excludes: ['/**/404', '/**/404.html'],
        query: `
        {
          site {
            siteMetadata {
              siteUrl
            }
          }
          allSitePage(filter: {context: {i18n: {routed: {eq: false}}}}) {
            nodes {
              context {
                i18n {
                  defaultLanguage
                  languages
                  originalPath
                }
              }
              path
            }
          }
        }
        `,
        serialize: (node: any) => {
          const { languages, originalPath, defaultLanguage } = node.context.i18n;
          console.log(node, languages, originalPath, defaultLanguage);
          const siteUrl = url + originalPath;
          const links = [
            { lang: defaultLanguage, siteUrl },
            { lang: 'x-default', siteUrl },
          ];
          languages.forEach((lang: string) => {
            if (lang === defaultLanguage) return;
            links.push({ lang, siteUrl: `${url}/${lang}${originalPath}` });
          });
          return {
            siteUrl,
            changefreq: 'daily',
            priority: originalPath === '/' ? 1.0 : 0.7,
            links,
          };
        },
      },
    },
  ],
};

export default config;
