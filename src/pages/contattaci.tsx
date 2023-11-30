import React from 'react';
import Layout from '../components/organisms/Layout';
import HeroContattaci from '../components/organisms/HeroContattaci';
import ContattaciBody from '../components/molecules/ContattaciBody';
import { HeadProps, graphql } from 'gatsby';
import Seo from '../components/atoms/Seo';
import { useTranslation } from 'react-i18next';
import { useI18next } from 'gatsby-plugin-react-i18next';

const Contattaci = () => {
  return (
    <Layout>
      <HeroContattaci />
      <ContattaciBody />
    </Layout>
  );
};

export default Contattaci;

export const Head = ({ location }: HeadProps) => {
  const { t } = useTranslation();
  const { language } = useI18next();
  return (
    <Seo
      lang={language}
      title={t('SEOTitle')}
      pathname={location.pathname}
      description={t('SEODescription')}
      structuredData
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
