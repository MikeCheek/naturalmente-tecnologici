import { graphql, useStaticQuery } from 'gatsby';

const useHeardOnImages = () => {
  const data: Data = useStaticQuery(graphql`
    query HeardOn {
      allFile(
        filter: { extension: { regex: "/(jpg)|(jpeg)|(png)/" }, dir: { regex: "src/images/heardOn/" } }
        sort: { id: ASC }
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

export default useHeardOnImages;
