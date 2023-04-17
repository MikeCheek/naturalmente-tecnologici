import { graphql, useStaticQuery } from 'gatsby';

const useSiteMetadata = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          siteUrl
        }
      }
      featuredImage: file(absolutePath: { glob: "**/src/images/logo-og.jpg" }) {
        childImageSharp {
          gatsbyImageData(layout: FIXED, width: 1200)
        }
      }
    }
  `);

  return { metadata: data.site.siteMetadata, featuredImage: data.featuredImage };
};

export default useSiteMetadata;
