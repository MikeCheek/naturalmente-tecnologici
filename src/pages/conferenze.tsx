import React from 'react';
import Seo from '../components/atoms/Seo';
import Layout from '../components/organisms/Layout';
import ConferenceBody from '../components/atoms/ConferenceBody';

type Data = {
  questions: string[];
  createdAt: number;
  id: string;
}[];

const Conferenze = () => {
  return (
    <Layout insects={false} onlyLogo>
      <ConferenceBody />
    </Layout>
  );
};

export const Head = () => (
  <Seo
    title="Conferenze"
    pathname="/conferenze"
    noIndex
    description="Conferenze interattive"
    // structuredData
  />
);

export default Conferenze;
