import React from 'react';
import Layout from '../components/organisms/Layout';
import HeroInfo from '../components/organisms/HeroInfo';
import Seo from '../components/atoms/Seo';
import Contacts from '../components/molecules/Contacts';
import Faq from '../components/organisms/Faq';
import HowToReach from '../components/atoms/HowToReach';

const Info = () => {
  return (
    <Layout>
      <HeroInfo />
      {/* <HowToReach /> */}
      <Faq />
      <Contacts />
    </Layout>
  );
};

export const Head = () => (
  <Seo
    title="Info"
    pathname="/info/"
    description="Tutto ciò che devi sapere sul festival e molto altro. Per qualunque collaborazione, intervista, supporto o informazione puoi contattarci a direttivo@syskrack.org"
    structuredData
  />
);

export default Info;
