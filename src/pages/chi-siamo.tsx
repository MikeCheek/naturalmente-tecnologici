import 'react-responsive-carousel/lib/styles/carousel.min.css';
import React, { Suspense, lazy } from 'react';
import Layout from '../components/organisms/Layout';
import HeroAbout from '../components/organisms/HeroAbout';
import Loading from '../components/molecules/Loading';
import Seo from '../components/atoms/Seo';
import Syskrack from '../components/molecules/Syskrack';

const ChiSiamo = () => {
  const Organizers = lazy(() => import('../components/organisms/Organizers'));
  return (
    <Layout>
      <HeroAbout />
      <Syskrack />
      <Suspense fallback={<Loading />}>
        <Organizers />
      </Suspense>
    </Layout>
  );
};

export const Head = () => (
  <Seo
    title="Chi siamo"
    pathname="/chi-siamo/"
    description="Naturalmente Tecnologici è un evento organizzato dall'associazione Syskrack Giuseppe Porsia in quel di Grassano (Matera)"
    structuredData
  />
);

export default ChiSiamo;
