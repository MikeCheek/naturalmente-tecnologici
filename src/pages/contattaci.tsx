import React from 'react';
import Layout from '../components/organisms/Layout';
import HeroContattaci from '../components/organisms/HeroContattaci';
import ContattaciBody from '../components/molecules/ContattaciBody';
import { HeadProps } from 'gatsby';
import Seo from '../components/atoms/Seo';

const Contattaci = () => {
  return (
    <Layout>
      <HeroContattaci />
      <ContattaciBody />
    </Layout>
  );
};

export default Contattaci;

export const Head = ({ location }: HeadProps) => {
  return <Seo title={'Contattaci'} pathname={location.pathname} description={'Contattaci'} structuredData />;
};
