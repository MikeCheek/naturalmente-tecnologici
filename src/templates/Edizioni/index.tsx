import React from 'react';
import * as styles from './index.module.scss';
import Seo from '../../components/atoms/Seo';
import { HeadProps, graphql } from 'gatsby';
import Layout from '../../components/organisms/Layout';
import Heading from '../../components/atoms/Heading';
import ShowOnView from '../../components/atoms/ShowOnView';
import EdizioniData from './index.types';
import HeroEdizioni from '../../components/organisms/HeroEdizioni';

interface IndexProps {
  pageContext: EdizioniData;
}

const Index = ({ pageContext }: IndexProps) => {
  return (
    <Layout>
      <HeroEdizioni theme={pageContext.theme} year={pageContext.year} />
      <ShowOnView className={styles.head}>
        <h4 dangerouslySetInnerHTML={{ __html: pageContext.theme }}></h4>
      </ShowOnView>
      <Heading text={'Edizione ' + pageContext.year} />
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
  query ($language: String!) {
    locales: allLocale(filter: { ns: { in: ["common", "editions"] }, language: { eq: $language } }) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
  }
`;
