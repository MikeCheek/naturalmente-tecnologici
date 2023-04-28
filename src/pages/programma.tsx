import React from 'react';
import Layout from '../components/organisms/Layout';
import HeroProgram from '../components/organisms/HeroProgram';
import Seo from '../components/atoms/Seo';
import Banner from '../components/atoms/Banner';

const Programma = () => {
  return (
    <Layout>
      <HeroProgram />
      <Banner text="IL PROGRAMMA NON È STATO RILASCIATO" />
    </Layout>
  );
};

export const Head = () => (
  <Seo
    title="Programma"
    pathname="/programma/"
    description="Dall' 11 al 13 Agosto 2023 immersi in una location mozzafiato, in mezzo alle colline materane, tra camping, laboratori, conferenze, e festival musicali"
  />
);

export default Programma;
