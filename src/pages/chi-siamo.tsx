import React from 'react';
import Layout from '../components/organisms/Layout';
import HeroAbout from '../components/organisms/HeroAbout';
import Syskrack from '../components/molecules/Syskrack';
import Bifolco from '../components/molecules/Bifolco';
import Seo from '../components/atoms/Seo';

const ChiSiamo = () => {
  return (
    <Layout>
      <HeroAbout />
      <Syskrack />
      <Bifolco />
    </Layout>
  );
};

export const Head = () => (
  <Seo
    title="Chi siamo"
    description="Naturalmente Tecnologici è un evento 3Days organizzato dall'associazione Syskrack Giuseppe Porsia in Grassano (MT)"
  />
);

export default ChiSiamo;
