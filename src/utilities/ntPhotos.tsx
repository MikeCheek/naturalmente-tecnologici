import { graphql, useStaticQuery } from 'gatsby';

type DataType = { music: { edges: Edge[] }; activities: { edges: Edge[] }; nature: { edges: Edge[] } };
export const images = () => {
  const data: DataType = useStaticQuery(graphql`
    query NTPhotos {
      music: allFile(filter: { extension: { regex: "/(jpg)|(jpeg)|(png)/" }, dir: { regex: "src/images/nt/music/" } }) {
        edges {
          node {
            id
            name
            childImageSharp {
              gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, quality: 60)
            }
          }
        }
      }
      activities: allFile(
        filter: { extension: { regex: "/(jpg)|(jpeg)|(png)/" }, dir: { regex: "src/images/nt/activities/" } }
      ) {
        edges {
          node {
            id
            name
            childImageSharp {
              gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, quality: 60)
            }
          }
        }
      }
      nature: allFile(
        filter: { extension: { regex: "/(jpg)|(jpeg)|(png)/" }, dir: { regex: "src/images/nt/nature/" } }
      ) {
        edges {
          node {
            id
            name
            childImageSharp {
              gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, quality: 60)
            }
          }
        }
      }
    }
  `);

  return data;
};
