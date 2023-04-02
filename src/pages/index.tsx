import * as React from 'react';
import type { PageProps } from 'gatsby';
import Layout from '../components/organisms/Layout';
import HeroHome from '../components/organisms/HeroHome';
import './../styles/globals.scss';

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <HeroHome />
    </Layout>
  );
};

export default IndexPage;
