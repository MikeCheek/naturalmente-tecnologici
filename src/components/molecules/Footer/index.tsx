import React from 'react';
import * as styles from './index.module.scss';
import Separator from '../../atoms/Separator';
import LogoNT from '../../../assets/logo-nt.svg';
import { Link } from 'gatsby';
import SocialLinks from '../SocialLinks';

const Index = () => {
  return (
    <footer className={styles.wrap} id="footer">
      <Separator />
      <div>
        <Link className={styles.logo} to="#top">
          <LogoNT width="266" height="87.92" style={{ fill: 'var(--nt-orange)' }} />
        </Link>
        <p>11-13 Agosto 2023</p>
      </div>
      <SocialLinks />
    </footer>
  );
};

export default Index;
