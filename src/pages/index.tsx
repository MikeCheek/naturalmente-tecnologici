import React from 'react';
import Layout from '../components/organisms/Layout';
import NaturalmenteTecnologici from '../components/molecules/NaturalmenteTecnologici';
import HeroHome from '../components/organisms/HeroHome';
import Seo from '../components/atoms/Seo';
import Theme from '../components/organisms/Theme';
import WhenAndWhere from '../components/atoms/WhenAndWhere';
import Reviews from '../components/atoms/Reviews';
import 'react-circular-progressbar/dist/styles.css';
import HeardOn from '../components/molecules/HeardOn';

const IndexPage = () => {
  return (
    <Layout>
      <HeroHome />
      <Theme />
      <HeardOn />
      <NaturalmenteTecnologici />
      <WhenAndWhere />
      <Reviews />
    </Layout>
  );
};

export const Head = () => (
  <Seo
    title="Home"
    pathname="/"
    description="Un evento di 3 giorni in una location mozzafiato, selvaggia, tra le colline materane tra camping, laboratori, conferenze e incontro tra persone di ogni dove."
    structuredData
  />
);

export default IndexPage;
