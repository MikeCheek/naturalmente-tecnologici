import React, { useState } from 'react';
import * as styles from './index.module.scss';
import Collina from '../../../assets/collina-lato.svg';
import Flower from '../../atoms/Flower';
import Timer from '../../molecules/Timer';

const Index = () => {
  const [showTimer, setShowTimer] = useState<boolean>(true);

  return (
    <div className={styles.wrap}>
      <div className={styles.headWrap}>
        <span>
          <p className={styles.date}>11-13 Agosto 2023</p>
          <h1 className={styles.heading}>
            PROGRAMMA <br />
            FESTIVAL MUSICALE, CONFERENZE, WORKSHOP <br /> E CAMPING
          </h1>
        </span>
        {showTimer ? (
          <Timer date={new Date('August 11, 2023 00:00:00')} shutOffTimer={() => setShowTimer(false)} />
        ) : (
          <></>
        )}
      </div>
      <div className={styles.orangeFlowers}>
        <Flower color="var(--nt-orange)" />
        <Flower color="var(--nt-orange)" />
        <Flower color="var(--nt-orange)" />
        <Flower color="var(--nt-orange)" />
      </div>
      <Collina width="1440" height="129" className={styles.collina} />
      <div className={styles.white}></div>
    </div>
  );
};

export default Index;
