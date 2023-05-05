import React from 'react';
import Banner from '../../atoms/Banner';
import * as styles from './index.module.scss';
import { showPopUp } from '../../../hooks/newsletter';
import Collina from '../../../assets/collina.svg';
import Button from '../../atoms/Button';

const Index = () => {
  return (
    <div className={styles.wrap}>
      <Banner text="IL PROGRAMMA NON È STATO RILASCIATO" />
      <h3>Vuoi sapere quando verrà rilasciato?</h3>
      <h4>Rimani aggiornato iscrivendoti alla nostra newsletter!</h4>
      <div className={styles.buttonWrap}>
        <Button text="ISCRIVITI" hoverWhite title="Iscriviti alla Newsletter dell'associazione" onClick={showPopUp} />
      </div>
      <Collina width="1440" className={styles.collina} />
    </div>
  );
};

export default Index;
