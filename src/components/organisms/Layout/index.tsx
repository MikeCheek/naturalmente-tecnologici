import React, { useEffect, useState } from 'react';

import Cookies from 'js-cookie';

import * as styles from './index.module.scss';
import CookieBanner from '../../molecules/CookieBanner';
import { CookiesNames } from '../../../utilities/cookies';
import FlyingInsects from '../../molecules/FlyingInsects';
import Footer from '../../molecules/Footer';
import { LayoutProps } from './index.types';
import NavBar from '../NavBar';
import { ModalContext } from '../../../utilities/useModalContext';
import Modal from '../../atoms/Modal';

const Index = ({ children, insects = true }: LayoutProps) => {
  const [banner, setBanner] = useState<boolean>(false);

  const [opened, setOpened] = useState<boolean>(false);
  const [text, setText] = useState<{ name: string; description: string }>({ name: '', description: '' });
  const [badges, setBadges] = useState<string[]>();
  const [price, setPrice] = useState<string>('');

  const scrollIntoElem = () => {
    const hash = (window.location || location).hash;
    if (hash.length > 0) {
      const elem = document.getElementById(hash.slice(1));
      if (elem) {
        const rect = elem.getBoundingClientRect();
        window.scrollTo({ top: rect.top + window.scrollY - rect.height - 80 });
      }
    }
  };

  useEffect(() => {
    if (Cookies.get(CookiesNames.functional) == undefined) {
      setBanner(true);
    }
    setTimeout(scrollIntoElem, 500);
  }, []);

  return (
    <ModalContext.Provider
      value={{
        setText: (title, price, description, badges) => {
          setText({ name: title, description: description });
          setBadges(badges);
          setPrice(price);
          setOpened(true);
        },
      }}
    >
      <div id="top">
        <NavBar />
        {banner ? <CookieBanner close={() => setBanner(false)} /> : <></>}
        {insects ? <FlyingInsects /> : <></>}
        <Modal
          opened={opened}
          close={() => setOpened(false)}
          title={text.name}
          price={price}
          description={text.description}
          badges={badges}
        />
        <main className={styles.wrap}>{children}</main>
        <Footer />
      </div>
    </ModalContext.Provider>
  );
};

export default Index;
