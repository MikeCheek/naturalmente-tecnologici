import React from 'react';

import * as styles from './index.module.scss';
import BigBranch from '../../../assets/big-branch.svg';
import Colli from '../../../assets/colli.svg';
import Collina from '../../../assets/collina.svg';
import FastActions from '../../molecules/FastActions';
import Flower from '../../atoms/Flower';

const Index = () => {
  return (
    <div className={styles.wrap}>
      <BigBranch width="555" height="282" className={styles.bigBranch} />
      <div className={styles.headWrap}>
        <a className={styles.date} href="#quando-e-dove" title="Quando e dove">
          Bosco Coste, Grottole(MT)
          <br /> 11&gt;13 Agosto 2023
        </a>
        <h1 className={styles.heading}>
          RI-PRENDIAMOCI IL FUTURO <br />3 GIORNI DI MUSICA, ARTE, INNOVAZIONE TECNOLOGICA E SOCIALE
        </h1>
        <div className={styles.orangeFlowers}>
          <Flower color="var(--nt-orange)" />
          <Flower color="var(--nt-orange)" />
          <Flower color="var(--nt-orange)" />
          <Flower color="var(--nt-orange)" />
        </div>
        <Colli width="1440" height="185" className={styles.colli} />
        <div className={styles.white}></div>
      </div>
      {/* <FastActions /> */}
      {/* <div className={styles.notReleased}>
        <h2>I biglietti non sono ancora stati rilasciati</h2>
        <h3>Seguici per rimanere aggiornato</h3>
        <SocialLinks green onlySocial />
        <div className={styles.buttonWrap}>
          <Button
            text="NEWSLETTER"
            hoverWhite
            title="Iscriviti alla Newsletter dell'associazione"
            onClick={showPopUp}
          />
        </div>
        <p></p>
      </div>*/}
      <div className={styles.wrapHill}>
        <div className={styles.greenFlowers}>
          <Flower color="var(--nt-green)" />
          <Flower color="var(--nt-green)" />
          <Flower color="var(--nt-green)" />
        </div>
        <Collina width="1440" height="64" className={styles.collina} />
        <div className={styles.green}></div>
      </div>
    </div>
  );
};

export default Index;
