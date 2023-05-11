import React, { useEffect, useState } from 'react';

import Cookies from 'js-cookie';

import * as styles from './index.module.scss';
import CookieBanner from '../../molecules/CookieBanner';
import { CookiesNames } from '../../../hooks/cookies';
import FlyingInsects from '../../molecules/FlyingInsects';
import Footer from '../../molecules/Footer';
import { LayoutProps } from './index.types';
import NavBar from '../NavBar';

const Index = ({ children, insects = true, pathname }: LayoutProps) => {
  const [banner, setBanner] = useState<boolean>(false);

  useEffect(() => {
    if (Cookies.get(CookiesNames.functional) == undefined) {
      setBanner(true);
    }
  }, []);

  return (
    <div id="top">
      <NavBar pathname={pathname} />
      {banner ? <CookieBanner close={() => setBanner(false)} /> : <></>}
      {insects ? <FlyingInsects /> : <></>}
      <main className={styles.wrap}>{children}</main>
      <Footer />
    </div>
  );
};

export default Index;
