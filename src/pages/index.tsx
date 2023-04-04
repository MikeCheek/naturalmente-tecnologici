import * as React from 'react';
import type { PageProps } from 'gatsby';
import Layout from '../components/organisms/Layout';
import HeroHome from '../components/organisms/HeroHome';
import './../styles/globals.scss';
import Seo from '../components/atoms/Seo';

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <HeroHome />
    </Layout>
  );
};

export const Head = () => (
  <Seo
    title="Home"
    description="L'evento si propone di essere occasione di ritrovo della community di Syskrack nonché strumento di disseminazione culturale sul territorio."
  />
);

export default IndexPage;
