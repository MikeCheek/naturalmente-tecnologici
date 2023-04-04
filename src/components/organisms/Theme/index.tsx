import React from 'react';
import * as styles from './index.module.scss';
import Cloud from '../../atoms/Cloud';

const Index = () => {
  return (
    <>
      <div className={styles.wrap}>
        <h2>
          RIPRENDIAMOCI IL FUTURO.
          <br />
          RAGIONAMENTI COMPLESSI SULL'ACCELERAZIONE DEI NOSTRI TEMPI
        </h2>
      </div>
      <Cloud text="Ciao sono Giuseppe Becci, l' organizzatore dell'evento Naturalmente Tecnologici. Il tema di quest'anno mi è venuto in mente leggendo ..." />
    </>
  );
};

export default Index;
