import React from 'react';
import Layout from '../components/organisms/Layout';
import NaturalmenteTecnologici from '../components/molecules/NaturalmenteTecnologici';
import HeroHome from '../components/organisms/HeroHome';
import Seo from '../components/atoms/Seo';
import Theme from '../components/organisms/Theme';
import LastEdition from '../components/molecules/LastEdition';
import 'react-circular-progressbar/dist/styles.css';
import FastActions from '../components/molecules/FastActions';
import Thanks from '../components/molecules/Thanks';
import { graphql } from 'gatsby';
import { useTranslation } from 'react-i18next';
import { useI18next } from 'gatsby-plugin-react-i18next';

const IndexPage = () => {
  return (
    <Layout>
      <HeroHome />
      <Thanks />
      {/* <Theme /> */}
      <NaturalmenteTecnologici />
      <LastEdition />
      {/* <FastActions /> */}
    </Layout>
  );
};

export const Head = () => {
  const { t } = useTranslation();
  const { language } = useI18next();

  return <Seo lang={language} title={t('SEOTitle')} pathname="/" description={t('SEODescription')} structuredData />;
};

export default IndexPage;

export const query = graphql`
  query ($language: String!) {
    locales: allLocale(filter: { ns: { in: ["common", "index"] }, language: { eq: $language } }) {
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
