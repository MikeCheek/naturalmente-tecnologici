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
import { HeadProps, graphql } from 'gatsby';
import WindShovel from '../components/atoms/WindShovel';

const IndexPage = () => {
  return (
    <Layout>
      <HeroHome />
      {/* <Thanks /> */}
      {/* <Theme /> */}
      <NaturalmenteTecnologici />
      {/* RIMETTERE QUESTO QUANDO SI DEVONO RIAGGIUNGERE LE INFO */}
      {/* <LastEdition /> */}
      {/* <FastActions /> */}
    </Layout>
  );
};

export const Head = ({ data, pageContext }: HeadProps) => {
  const t = (key: string) => JSON.parse((data as any).locales.edges[1].node.data)[key] ?? key;

  return (
    <Seo
      lang={(pageContext as any).language}
      title={t('SEOTitle')}
      pathname="/"
      description={t('SEODescription')}
      structuredData
    />
  );
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
