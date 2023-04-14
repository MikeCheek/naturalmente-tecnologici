import React from 'react';
import * as styles from './index.module.scss';
import Collina from '../../../assets/collina-lato.svg';
import Flower from '../../atoms/Flower';

const Index = () => {
  return (
    <div className={styles.wrap}>
      {/* <BigBranch width="555" height="282" className={styles.bigBranch} /> */}
      <div className={styles.headWrap}>
        <p className={styles.date}>11-13 Agosto 2023</p>
        <h1 className={styles.heading}>
          PROGRAMMA
          <br />
          RESIDENZA ARTISTICA, CONFERENZE E WORKSHOPS
        </h1>
        <div className={styles.orangeFlowers}>
          <Flower color="var(--nt-orange)" />
          <Flower color="var(--nt-orange)" />
          <Flower color="var(--nt-orange)" />
          <Flower color="var(--nt-orange)" />
        </div>
        <Collina width="1440" height="129" className={styles.collina} />
        <div className={styles.white}></div>
      </div>
    </div>
  );
};

export default Index;
