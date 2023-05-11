import React from 'react';
import Layout from '../components/organisms/Layout';
import HeroContacts from '../components/organisms/HeroContacts';
import Seo from '../components/atoms/Seo';
import Contacts from '../components/molecules/Contacts';

const Contattaci = () => {
  return (
    <Layout>
      <HeroContacts />
      <Contacts />
    </Layout>
  );
};

export const Head = () => (
  <Seo
    title="Contattaci"
    pathname="/contattaci/"
    description="Per qualunque collaborazione, intervista, supporto o informazione puoi contattarci a direttivo@syskrack.org"
    structuredData
  />
);

export default Contattaci;
