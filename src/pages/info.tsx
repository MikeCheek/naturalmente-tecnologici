import React from 'react';
import Layout from '../components/organisms/Layout';
import HeroInfo from '../components/organisms/HeroInfo';
import Seo from '../components/atoms/Seo';
import Contacts from '../components/molecules/Contacts';
import Faq from '../components/organisms/Faq';
import HowToReach from '../components/atoms/HowToReach';
import { HeadProps, graphql } from 'gatsby';

const Info = () => {
  return (
    <Layout>
      <HeroInfo />
      <HowToReach />
      <Faq />
      <Contacts />
    </Layout>
  );
};

export const Head = ({ data, pageContext }: HeadProps) => {
  const t = (key: string) => JSON.parse((data as any).locales.edges[1].node.data)[key] ?? key;
  return (
    <Seo
      lang={(pageContext as any).language}
      title={t('SEOTitle')}
      pathname="/info/"
      description={t('SEODescription')}
      structuredData
    />
  );
};

export default Info;

export const query = graphql`
  query ($language: String!) {
    locales: allLocale(filter: { ns: { in: ["common", "info"] }, language: { eq: $language } }) {
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
