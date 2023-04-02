import React from 'react';
import * as styles from './index.module.scss';
import BigBranch from '../../../assets/big-branch.svg';
import Colli from '../../../assets/colli.svg';
import FastActions from '../../molecules/FastActions';
import Flower from '../../atoms/Flower';
import FlyingInsects from '../../molecules/FlyingInsects';

const Index = () => {
  return (
    <div className={styles.wrap}>
      <BigBranch width="620" height="285" className={styles.bigBranch} />
      <FlyingInsects />
      <div className={styles.headWrap}>
        <p className={styles.date}>11-13 Agosto 2023</p>
        <h1 className={styles.heading}>
          RI-PRENDIAMOCI IL FUTURO
          <br />3 GIORNI DI INNOVAZIONE TECNOLOGICA E SOCIALE
        </h1>
        <Colli width="1440" height="185" className={styles.colli} />
        <div className={styles.flowers}>
          <Flower color="var(--nt-orange)" />
          <Flower color="var(--nt-orange)" />
          <Flower color="var(--nt-orange)" />
          <Flower color="var(--nt-orange)" />
        </div>
      </div>
      <FastActions />
    </div>
  );
};

export default Index;
