import React from 'react';
import Layout from '../components/organisms/Layout';
import NaturalmenteTecnologici from '../components/molecules/NaturalmenteTecnologici';
import HeroHome from '../components/organisms/HeroHome';
import Seo from '../components/atoms/Seo';
import 'react-circular-progressbar/dist/styles.css';
import { HeadProps, graphql } from 'gatsby';

const IndexPage = () => {
  return (
    <Layout insects={false}>
      <HeroHome />
      {/* <Thanks /> */}
      {/* <Theme /> */}
      <NaturalmenteTecnologici />
      {/* RIMETTERE QUESTO QUANDO SI DEVONO RIAGGIUNGERE LE INFO */}
      {/* <LastEdition /> */}
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
