import React from 'react';
import Layout from '../../components/organisms/Layout';
import Seo from '../../components/atoms/Seo';
import 'react-datetime-picker/dist/DateTimePicker.css';
import 'react-calendar/dist/Calendar.css';
import 'react-clock/dist/Clock.css';
import AddConference from '../../components/atoms/AddConference';

const Nuova = () => {
  return (
    <Layout insects={false} onlyLogo>
      <AddConference />
    </Layout>
  );
};

export const Head = () => (
  <Seo
    title="Nuova Conferenza"
    pathname="/conferenze/nuova"
    noIndex
    description="Aggiungi una Conferenza interattive"
    // structuredData
  />
);

export default Nuova;
