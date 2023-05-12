import React, { Suspense, lazy } from 'react';
import Layout from '../components/organisms/Layout';
import HeroHome from '../components/organisms/HeroHome';
import Loading from '../components/molecules/Loading';
import Seo from '../components/atoms/Seo';
import Theme from '../components/organisms/Theme';
import WhenAndWhere from '../components/atoms/WhenAndWhere';
import Reviews from '../components/atoms/Reviews';
import 'react-circular-progressbar/dist/styles.css';

const IndexPage = () => {
  const NaturalmenteTecnologici = lazy(() => import('../components/molecules/NaturalmenteTecnologici'));
  return (
    <Layout>
      <HeroHome />
      <Theme />
      <Suspense fallback={<Loading />}>
        <NaturalmenteTecnologici />
      </Suspense>
      <WhenAndWhere />
      <Reviews />
    </Layout>
  );
};

export const Head = () => (
  <Seo
    title="Home"
    pathname="/"
    description="Un evento di 3 giorni in una location mozzafiato, selvaggia, tra le colline materane tra camping, laboratori, conferenze e incontro tra persone di ogni dove."
    structuredData
  />
);

export default IndexPage;
