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
          SYSKRACK
          <br />
          LA COMMUNITY GLOBALE CHE AGISCE LOCALMENTE
        </h1>
        <StaticImage
          alt="Logo Syskrack"
          src="../../../images/syskrack-logo.png"
          layout="constrained"
          width={300}
          className={styles.image}
        />
        <div className={styles.colliWrap}>
          <Colli width="1440" height="185" className={styles.colli} />
          <div className={styles.white}></div>
        </div>
        <Collina width="1440" height="129" className={styles.collina} />
        <div className={styles.green}></div>
        <div className={styles.greenFlowers}>
          <Flower color="var(--nt-green)" />
          <Flower color="var(--nt-green)" />
          <Flower color="var(--nt-green)" />
          <Flower color="var(--nt-green)" />
        </div>
      </div>
    </div>
  );
};

export default Index;
