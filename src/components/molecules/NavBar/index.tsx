import React, { useState } from 'react';
import * as styles from './index.module.scss';
import LogoNT from '../../../assets/logo-nt.svg';
import Hamburger from '../../../assets/hamburger.svg';
import X from '../../../assets/x.svg';
import Navigation from '../Navigation';
import { Link } from 'gatsby';

const Index = () => {
  const [opened, setOpened] = useState<boolean>(false);

  return (
    <div className={styles.wrap}>
      <Link to="/" className={styles.logoNT}>
        <LogoNT width="195" height="64.45" style={opened ? { fill: 'var(--nt-green)' } : { fill: 'var(--nt-white)' }} />
      </Link>
      <Navigation opened={opened} />
      {opened ? (
        <span onClick={() => setOpened(false)} className={styles.menuIcon}>
          <X width="25" height="25" />
        </span>
      ) : (
        <span onClick={() => setOpened(true)} className={styles.menuIcon}>
          <Hamburger width="28" height="20" />
        </span>
      )}
    </div>
  );
};

export default Index;
