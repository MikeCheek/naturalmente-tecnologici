import { graphql, useStaticQuery } from 'gatsby';

const useSiteMetadata = () => {
  const data: Data = useStaticQuery(graphql`
    query SyskrackImages {
      allFile(
        filter: { extension: { regex: "/(jpg)|(jpeg)|(png)/" }, dir: { regex: "src/images/syskrack/" } }
        sort: { name: ASC }
      ) {
        edges {
          node {
            id
            name
            childImageSharp {
              gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED, width: 700, quality: 90)
            }
          }
        }
      }
    }
  `);

  return data;
};

export default useSiteMetadata;
