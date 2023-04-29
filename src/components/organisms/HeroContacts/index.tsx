import React from 'react';
import * as styles from './index.module.scss';
import Flower from '../../atoms/Flower';
import Colli from '../../../assets/colli.svg';
import Collina from '../../../assets/collina-lato.svg';
import Speaking from '../../../assets/speaking.svg';

const Index = () => {
  return (
    <div className={styles.wrap}>
      <div className={styles.headWrap}>
        <h1 className={styles.heading}>
          CONTATTACI <br />
          VOGLIAMO SENTIRE LA TUA VOCE
        </h1>
        <Speaking width={600} className={styles.speaking} fill="var(--nt-dark-green)" />
        <div className={styles.svgWrap}>
          <div className={styles.collinaWrap}>
            <Collina width="1440" height="129" className={styles.collina} fill="var(--nt-white)" />
            <div className={styles.white}></div>
          </div>

          <div className={styles.greenFlowers}>
            <Flower color="var(--nt-green)" />
            <Flower color="var(--nt-green)" />
            <Flower color="var(--nt-green)" />
            <Flower color="var(--nt-green)" />
          </div>
          <Colli width="1440" height="185" className={styles.colli} fill="var(--nt-green)" />
          <div className={styles.green}></div>
        </div>
      </div>
    </div>
  );
};

export default Index;
