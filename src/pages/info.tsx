import React from 'react';
import Layout from '../components/organisms/Layout';
import HeroContacts from '../components/organisms/HeroContacts';
import Seo from '../components/atoms/Seo';
import Contacts from '../components/molecules/Contacts';
import Faq from '../components/organisms/Faq';

const Info = () => {
  return (
    <Layout>
      <HeroContacts />
      <Contacts />
      <Faq />
    </Layout>
  );
};

export const Head = () => (
  <Seo
    title="Info"
    pathname="/info/"
    description="Per qualunque collaborazione, intervista, supporto o informazione puoi contattarci a direttivo@syskrack.org"
    structuredData
  />
);

export default Info;
