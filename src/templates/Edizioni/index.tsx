import React from 'react';
import * as styles from './index.module.scss';
import Seo from '../../components/atoms/Seo';
import { HeadProps, graphql } from 'gatsby';
import Layout from '../../components/organisms/Layout';
import EdizioniData from './index.types';
import ScrollyTelling from '../../components/molecules/ScrollyTelling';

interface IndexProps {
  pageContext: EdizioniData;
  data: Data;
}

const Index = ({ pageContext, data, ...props }: IndexProps) => {
  return (
    <Layout>
      <ScrollyTelling {...pageContext} data={data} />
    </Layout>
  );
};

export default Index;

export const Head = ({ location, pageContext }: HeadProps) => {
  const context = pageContext as EdizioniData;

  return (
    <Seo title={'Edizione ' + context.year} pathname={location.pathname} description={context.theme} structuredData />
  );
};

export const query = graphql`
  query ($language: String!, $imagesPath: String!) {
    locales: allLocale(filter: { ns: { in: ["common", "editions"] }, language: { eq: $language } }) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
    allFile(filter: { extension: { regex: "/(jpg)|(jpeg)|(png)/" }, dir: { regex: $imagesPath } }, sort: { id: ASC }) {
      edges {
        node {
          id
          name
          childImageSharp {
            gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED, width: 800, quality: 80)
          }
        }
      }
    }
  }
`;
