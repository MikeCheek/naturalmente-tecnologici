import React from 'react';
import Layout from '../components/organisms/Layout';
import HeroPartner from '../components/organisms/HeroPartner';
import PartnerBody from '../components/molecules/PartnerBody';
import Seo from '../components/atoms/Seo';
import { HeadProps, graphql } from 'gatsby';

const Partner = () => {
  return (
    <Layout>
      <HeroPartner />
      <PartnerBody />
    </Layout>
  );
};

export const Head = ({ data, pageContext }: HeadProps) => {
  const edges: Array<{ node: { data: string } }> = (data as any).locales.edges;
  const json = edges.map((e) => JSON.parse(e.node.data)).reduce((acc, curr) => ({ ...acc, ...curr }));
  const t = (key: string) => json[key] ?? key;

  return (
    <Seo
      lang={(pageContext as any).language}
      title={t('SEOTitle')}
      pathname="/partner/"
      description={t('SEODescription')}
      structuredData
    />
  );
};

export default Partner;

export const query = graphql`
  query ($language: String!) {
    locales: allLocale(filter: { ns: { in: ["common", "partner"] }, language: { eq: $language } }) {
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
