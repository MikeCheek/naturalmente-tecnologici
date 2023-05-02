import React from 'react';
import Layout from '../components/organisms/Layout';
import HeroPartner from '../components/organisms/HeroPartner';
import PartnerBody from '../components/molecules/PartnerBody';
import Seo from '../components/atoms/Seo';

const Partner = () => {
  return (
    <Layout>
      <HeroPartner />
      <PartnerBody />
    </Layout>
  );
};

export const Head = () => (
  <Seo
    title="Partner"
    pathname="/partner/"
    description="Selezioniamo partner che abbiano voglia di investire nella cultura e nello sviluppo delle persone e del territorio e ad accettare la nostra sfida collettiva."
    structuredData
  />
);

export default Partner;
