import React from 'react';
import Layout from '../../components/organisms/Layout';
import ConferenceBody from '../../components/atoms/ConferenceBody';
import Seo from '../../components/atoms/Seo';

export type FData = {
  questions: string[];
  createdAt: number;
  id: string;
  title: string;
  startAt: number;
  endAt: number;
  password: string;
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
