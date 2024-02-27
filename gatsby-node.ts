import { GatsbyNode } from 'gatsby';

// export const createPages: GatsbyNode['createPages'] = async ({ graphql, actions, reporter }) => {
//   const { createPage } = actions;

//   // you'll call `createPage` for each result
//   contattaciData.forEach((data) => {
//     createPage({
//       // As mentioned above you could also query something else like frontmatter.title above and use a helper function
//       // like slugify to create a slug
//       path: `/contattaci/${data.pathName}`,
//       // Provide the path to the MDX content file so webpack can pick it up and transform it into JSX
//       component: resolve(__dirname, 'src/templates/Contattaci/index.tsx'),
//       // You can use the values in this context in
//       // our page layout component
//       context: { ...data },
//     });
//   });
// };

export const createSchemaCustomization: GatsbyNode['createSchemaCustomization'] = ({ stage, loaders, actions }) => {
  const { createTypes } = actions;
  createTypes(`
    type SitePage implements Node {
      context: SitePageContext
    }
    type SitePageContext {
      i18n: i18nContext
    }
    type i18nContext {
        language: String,
        languages: [String],
        defaultLanguage: String,
        originalPath: String
        routed: Boolean
    }
  `);
  // if (stage === 'build-html' || stage === 'develop-html') {
  //   actions.setWebpackConfig({
  //     module: {
  //       rules: [
  //         {
  //           test: /react-p5/,
  //           use: (loaders as any).null(),
  //         },
  //       ],
  //     },
  //   });
  // }
};
