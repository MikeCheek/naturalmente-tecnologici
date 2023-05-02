import 'react-responsive-carousel/lib/styles/carousel.min.css';
import React from 'react';
import Layout from '../components/organisms/Layout';
import HeroAbout from '../components/organisms/HeroAbout';
import Organizers from '../components/organisms/Organizers';
import Seo from '../components/atoms/Seo';
import Syskrack from '../components/molecules/Syskrack';

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
    pathname="/chi-siamo/"
    description="Naturalmente Tecnologici è un evento organizzato dall'associazione Syskrack Giuseppe Porsia in quel di Grassano (Matera)"
    structuredData
  />
);

export default ChiSiamo;
