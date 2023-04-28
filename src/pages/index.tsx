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
    description=" I partecipanti, gli abitanti del luogo e le community si scambieranno idee, visioni ed esperienze. L'obiettivo è indagare nuovi orizzonti dello sviluppo tecnologico etici e sostenibili dal punto di vista sociale ed ambientale."
    structuredData
  />
);

export default IndexPage;
