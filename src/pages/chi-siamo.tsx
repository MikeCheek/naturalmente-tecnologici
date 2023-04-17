import React from 'react';
import Layout from '../components/organisms/Layout';
import HeroAbout from '../components/organisms/HeroAbout';
import Organizers from '../components/organisms/Organizers';
import Syskrack from '../components/molecules/Syskrack';
import Seo from '../components/atoms/Seo';

const ChiSiamo = () => {
  return (
    <Layout>
      <HeroAbout />
      <Syskrack />
      <Organizers />
    </Layout>
  );
};

export const Head = () => (
  <Seo
    title="Chi siamo"
    description="Naturalmente Tecnologici è un evento organizzato dall'associazione Syskrack Giuseppe Porsia in quel di Grassano (Matera)"
  />
);

export default ChiSiamo;
