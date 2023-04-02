import React, { useEffect, useRef } from 'react';
import * as styles from './index.module.scss';
import BigBranch from '../../../assets/big-branch.svg';
import Colli from '../../../assets/colli.svg';
import FastActions from '../../molecules/FastActions';
import Flower from '../../atoms/Flower';
import FlyingInsects from '../../molecules/FlyingInsects';

const Index = () => {
  const headRef = useRef<HTMLDivElement>(null);

  const setHeight = () => {
    let amount = 0;
    let mobileWidth = window.matchMedia('(max-width: 767px)');
    let tabletWidth = window.matchMedia('(max-width: 991px)');
    if (mobileWidth.matches) {
      amount = 60;
    } else if (tabletWidth.matches) {
      amount = 79.5;
    } else {
      amount = 86;
    }
    if (headRef.current) headRef.current.style.minHeight = `${window.innerHeight - amount - 75}px !important`;
  };

  useEffect(() => {
    if (typeof window != undefined) {
      window.addEventListener('resize', setHeight);
      setHeight();
    }

    return () => {
      window.removeEventListener('resize', () => {});
    };
  }, []);

  return (
    <div className={styles.wrap}>
      <BigBranch width="555" height="282" className={styles.bigBranch} />
      {/* <FlyingInsects /> */}
      <div ref={headRef} className={styles.headWrap}>
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
