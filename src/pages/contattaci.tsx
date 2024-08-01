import React from 'react';
import Layout from '../components/organisms/Layout';
import HeroContattaci from '../components/organisms/HeroContattaci';
import ContattaciBody from '../components/molecules/ContattaciBody';
import { HeadProps, graphql } from 'gatsby';
import Seo from '../components/atoms/Seo';
import Faq from '../components/organisms/Faq';

const Contattaci = () => {
  return (
    <Layout>
      <HeroContattaci />
      <ContattaciBody />
      {/* <Faq /> */}
    </Layout>
  );
};

export default Contattaci;

export const Head = ({ location, data, pageContext }: HeadProps) => {
  const edges: Array<{ node: { data: string } }> = (data as any).locales.edges;
  const json = edges.map((e) => JSON.parse(e.node.data)).reduce((acc, curr) => ({ ...acc, ...curr }));
  const t = (key: string) => json[key] ?? key;

  return (
    <Seo
      lang={(pageContext as any).language}
      title={t('SEOTitle')}
      pathname={location.pathname}
      description={t('SEODescription')}
      structuredData
      tally
    />
  );
};

export const query = graphql`
  query ($language: String!) {
    locales: allLocale(filter: { ns: { in: ["common", "contactUs"] }, language: { eq: $language } }) {
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
