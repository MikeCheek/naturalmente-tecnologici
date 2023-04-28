import React from 'react';
import Layout from '../components/organisms/Layout';
import HeroPartner from '../components/organisms/HeroPartner';
import PartnerBody from '../components/molecules/PartnerBody';

const Partner = () => {
  return (
    <Layout>
      <HeroPartner />
      <PartnerBody />
    </Layout>
  );
};

export default Partner;
