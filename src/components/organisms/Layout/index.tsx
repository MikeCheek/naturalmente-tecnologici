import React, { useEffect, useState } from 'react';

import Cookies from 'js-cookie';

import * as styles from './index.module.scss';
import CookieBanner from '../../molecules/CookieBanner';
import { CookiesNames } from '../../../utilities/cookies';
import FlyingInsects from '../../molecules/FlyingInsects';
import Footer from '../../molecules/Footer';
import { LayoutProps } from './index.types';
import NavBar from '../NavBar';

const Index = ({ children, insects = true }: LayoutProps) => {
  const [banner, setBanner] = useState<boolean>(false);

  const scrollIntoElem = () => {
    const hash = (window.location || location).hash;
    if (hash.length > 0) {
      const elem = document.getElementById(hash.slice(1));
      if (elem) elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    if (Cookies.get(CookiesNames.functional) == undefined) {
      setBanner(true);
    }
    setTimeout(scrollIntoElem, 500);
  }, []);

  return (
    <div id="top">
      <NavBar />
      {banner ? <CookieBanner close={() => setBanner(false)} /> : <></>}
      {insects ? <FlyingInsects /> : <></>}
      <main className={styles.wrap}>{children}</main>
      <Footer />
    </div>
  );
};

export default Index;
