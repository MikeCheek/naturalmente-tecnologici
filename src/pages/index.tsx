import React, { useState } from 'react';
import Layout from '../components/organisms/Layout';
import NaturalmenteTecnologici from '../components/molecules/NaturalmenteTecnologici';
import HeroHome from '../components/organisms/HeroHome';
import Seo from '../components/atoms/Seo';
import Theme from '../components/organisms/Theme';
import WhenAndWhere from '../components/atoms/WhenAndWhere';
import LastEdition from '../components/molecules/LastEdition';
import 'react-circular-progressbar/dist/styles.css';
import HeardOn from '../components/atoms/HeardOn';
import { ModalContext } from '../utilities/useModalContext';
import Modal from '../components/atoms/Modal';

const IndexPage = () => {
  const [opened, setOpened] = useState<boolean>(false);
  const [text, setText] = useState<{ name: string; description: string }>({ name: '', description: '' });
  const [badges, setBadges] = useState<string[]>();

  return (
    <ModalContext.Provider
      value={{
        setText: (title, description, badges) => {
          setText({ name: title, description: description });
          setBadges(badges);
          setOpened(true);
        },
      }}
    >
      <Layout>
        <Modal
          opened={opened}
          close={() => setOpened(false)}
          title={text.name}
          description={text.description}
          badges={badges}
        />
        <HeroHome />
        <Theme />
        <HeardOn />
        <NaturalmenteTecnologici />
        <WhenAndWhere />
        <LastEdition />
      </Layout>
    </ModalContext.Provider>
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
