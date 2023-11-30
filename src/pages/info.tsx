import React from 'react';
import Layout from '../components/organisms/Layout';
import HeroInfo from '../components/organisms/HeroInfo';
import Seo from '../components/atoms/Seo';
import Contacts from '../components/molecules/Contacts';
import Faq from '../components/organisms/Faq';
import HowToReach from '../components/atoms/HowToReach';
import { graphql } from 'gatsby';
import { useTranslation } from 'react-i18next';
import { useI18next } from 'gatsby-plugin-react-i18next';

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

export const Head = () => {
  const { t } = useTranslation();
  const { language } = useI18next();

  return (
    <Seo lang={language} title={t('SEOTitle')} pathname="/info/" description={t('SEODescription')} structuredData />
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
