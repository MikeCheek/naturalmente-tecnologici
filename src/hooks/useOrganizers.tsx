import { graphql, useStaticQuery } from 'gatsby';

const useOrganizers = () => {
  const data: Data = useStaticQuery(graphql`
    query AssetsPhotos {
      allFile(
        filter: { extension: { regex: "/(jpg)|(jpeg)|(png)/" }, dir: { regex: "src/images/crew/" } }
        sort: { name: ASC }
      ) {
        edges {
          node {
            id
            name
            childImageSharp {
              gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED, width: 300, quality: 80)
            }
          }
        }
      }
    }
  `);

  return data;
};

export default useOrganizers;
