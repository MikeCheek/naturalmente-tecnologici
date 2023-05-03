import * as React from 'react';
import Layout from '../components/organisms/Layout';
import HeroHome from '../components/organisms/HeroHome';
import Loading from '../components/molecules/Loading';
import Seo from '../components/atoms/Seo';
import Theme from '../components/organisms/Theme';
import { Suspense, lazy } from 'react';
import WhenAndWhere from '../components/atoms/WhenAndWhere';

const IndexPage = () => {
  const NaturalmenteTecnologici = lazy(() => import('../components/molecules/NaturalmenteTecnologici'));
  return (
    <Layout>
      <HeroHome />
      <Suspense fallback={<Loading />}>
        <NaturalmenteTecnologici />
      </Suspense>
      <Theme />
      <WhenAndWhere />
    </Layout>
  );
};

export const Head = () => (
  <Seo
    title="Home"
    pathname="/"
    description="I partecipanti si scambieranno idee, visioni ed esperienze. L'obiettivo è indagare su nuovi orizzonti etici e sostenibili dello sviluppo tecnologico."
    structuredData
  />
);

export default IndexPage;
