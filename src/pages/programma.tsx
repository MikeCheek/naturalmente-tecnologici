import React from 'react';
import Layout from '../components/organisms/Layout';
import HeroProgram from '../components/organisms/HeroProgram';
import Seo from '../components/atoms/Seo';
import Program from '../components/molecules/Program';
import Guests from '../components/organisms/Guests';

const Programma = () => {
  return (
    <Layout>
      <HeroProgram />
      <Guests />
      <Program />
    </Layout>
  );
};

export const Head = () => (
  <Seo
    title="Programma"
    pathname="/programma/"
    description="Dall' 11 al 13 Agosto 2023 immersi in una location mozzafiato, in mezzo alle colline materane, tra camping, laboratori, conferenze, e festival musicali"
    structuredData
  />
);

export default Programma;
