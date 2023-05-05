import React, { useEffect, useState } from 'react';
import NavBar from '../NavBar';
import { LayoutProps } from './index.types';
import * as styles from './index.module.scss';
import FlyingInsects from '../../molecules/FlyingInsects';
import Footer from '../../molecules/Footer';
import CookieBanner from '../../molecules/CookieBanner';
import Cookies from 'js-cookie';
import { CookiesNames } from '../../../hooks/cookies';

const Index = ({ children, insects = true }: LayoutProps) => {
  const [banner, setBanner] = useState<boolean>(false);

  useEffect(() => {
    if (Cookies.get(CookiesNames.functional) == undefined) {
      setBanner(true);
    }
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
