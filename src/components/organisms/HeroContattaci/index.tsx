import React from 'react';

import * as styles from './index.module.scss';
import Colli from '../../../assets/colli.svg';
import Collina from '../../../assets/collina-lato.svg';
import Flower from '../../atoms/Flower';
import SearchPeople from '../../../assets/search-people.svg';

const Index = () => {
  return (
    <div className={styles.wrap}>
      <div className={styles.headWrap}>
        <h1 className={styles.heading}>
          CONTATTACI
          <br />
          SIAMO QUI PER TE
        </h1>
        <SearchPeople width={300} className={styles.svg} fill="var(--nt-dark-green)" />
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
