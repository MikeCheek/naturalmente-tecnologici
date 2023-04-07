import React from 'react';
import Layout from '../components/organisms/Layout';
import HeroAbout from '../components/organisms/HeroAbout';
import Syskrack from '../components/molecules/Syskrack';
import Bifolco from '../components/atoms/Bifolco';

const ChiSiamo = () => {
  return (
    <Layout>
      <HeroAbout />
      <Syskrack />
      <Bifolco />
    </Layout>
  );
};

export default ChiSiamo;
