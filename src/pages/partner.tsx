import React from 'react';
import Layout from '../components/organisms/Layout';
import HeroPartner from '../components/organisms/HeroPartner';
import PartnerBody from '../components/molecules/PartnerBody';
import Seo from '../components/atoms/Seo';
import { graphql } from 'gatsby';
import { useTranslation } from 'react-i18next';
import { useI18next } from 'gatsby-plugin-react-i18next';

const Partner = () => {
  return (
    <Layout>
      <HeroPartner />
      <PartnerBody />
    </Layout>
  );
};

export const Head = () => {
  const { t } = useTranslation();
  const { language } = useI18next();

  return (
    <Seo lang={language} title={t('SEOTitle')} pathname="/partner/" description={t('SEODescription')} structuredData />
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
