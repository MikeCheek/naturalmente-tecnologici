import React from 'react';
import * as styles from './index.module.scss';
import { StaticImage } from 'gatsby-plugin-image';
import Flower from '../../atoms/Flower';
import Colli from '../../../assets/colli.svg';
import Collina from '../../../assets/collina-lato.svg';

const Index = () => {
  return (
    <div className={styles.wrap}>
      <div className={styles.headWrap}>
        <h1 className={styles.heading}>
          SYSKRACK <br />
          LA COMMUNITY GLOBALE CHE AGISCE LOCALMENTE
        </h1>
        <a
          className={styles.logoWrap}
          href="https://syskrack.org"
          rel="noopener noreferrer"
          target="_blank"
          title="Syskrack"
        >
          <StaticImage
            alt="Logo Syskrack"
            src="../../../images/syskrack-logo.png"
            layout="constrained"
            width={300}
            className={styles.logo}
          />
        </a>
        <div className={styles.svgWrap}>
          <div className={styles.colliWrap}>
            <Colli width="1440" height="185" className={styles.colli} fill="var(--nt-white)" />
            <div className={styles.white}></div>
          </div>
          <div className={styles.greenFlowers}>
            <Flower color="var(--nt-green)" />
            <Flower color="var(--nt-green)" />
            <Flower color="var(--nt-green)" />
            <Flower color="var(--nt-green)" />
          </div>
          <Collina width="1440" height="129" className={styles.collina} fill="var(--nt-green)" />
          <div className={styles.green}></div>
        </div>
      </div>
    </div>
  );
};

export default Index;
