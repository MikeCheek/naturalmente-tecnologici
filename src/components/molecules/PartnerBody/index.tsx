import React from 'react';
import * as styles from './index.module.scss';
import Partners from '../../atoms/Partners';

const Index = () => {
  return (
    <div className={styles.wrap}>
      <h4>
        Selezioniamo partner che abbiano voglia di investire nella cultura e nello sviluppo delle persone e del
        territorio e ad accettare la nostra sfida collettiva.
        <br />
        Vogliamo un'esperienza di impatto positivo e di risonanza nella community e sul luogo.
      </h4>
      <Partners />
    </div>
  );
};

export default Index;
