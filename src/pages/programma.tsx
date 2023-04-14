import React from 'react';
import Layout from '../components/organisms/Layout';
import HeroProgram from '../components/organisms/HeroProgram';
import Seo from '../components/atoms/Seo';

const Programma = () => {
  return (
    <Layout>
      <HeroProgram />
    </Layout>
  );
};

export const Head = () => (
  <Seo
    title="Programma"
    description="Dai un'occhiata al programma dell'evento, si prospettano giornate intense e produttive"
  />
);

export default Programma;
