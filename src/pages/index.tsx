import * as React from 'react';
import type { PageProps } from 'gatsby';
import Layout from '../components/organisms/Layout';
import HeroHome from '../components/organisms/HeroHome';
import './../styles/globals.scss';
import Head from '../components/atoms/Seo/Head';

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <Head
        title="Home"
        description="L'evento si propone di essere occasione di ritrovo della community di Syskrack nonché strumento di disseminazione culturale sul territorio."
      />
      <HeroHome />
    </Layout>
  );
};

export default IndexPage;
