import * as React from 'react';
import Layout from '../components/organisms/Layout';
import HeroHome from '../components/organisms/HeroHome';
import Seo from '../components/atoms/Seo';
import NaturalmenteTecnologici from '../components/molecules/NaturalmenteTecnologici';
import Theme from '../components/organisms/Theme';

const IndexPage = () => {
  return (
    <Layout>
      <HeroHome />
      <NaturalmenteTecnologici />
      <Theme />
    </Layout>
  );
};

export const Head = () => (
  <Seo
    title="Home"
    pathname="/"
    description="I partecipanti si scambieranno idee, visioni ed esperienze. L'obiettivo è indagare su nuovi orizzonti etici e sostenibili dello sviluppo tecnologico."
    structuredData
  />
);

export default IndexPage;
