import { GatsbyNode } from 'gatsby';
import { resolve } from 'path';
import partecipaData from './src/utilities/partecipaData';

export const createPages: GatsbyNode['createPages'] = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;

  // you'll call `createPage` for each result
  partecipaData.forEach((data) => {
    createPage({
      // As mentioned above you could also query something else like frontmatter.title above and use a helper function
      // like slugify to create a slug
      path: `/partecipa/${data.pathName}`,
      // Provide the path to the MDX content file so webpack can pick it up and transform it into JSX
      component: resolve(__dirname, 'src/templates/Partecipa/index.tsx'),
      // You can use the values in this context in
      // our page layout component
      context: { ...data },
    });
  });
};
