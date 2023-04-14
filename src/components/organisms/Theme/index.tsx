import React from 'react';
import * as styles from './index.module.scss';
import Cloud from '../../atoms/Cloud';
import CardImage from '../../atoms/CardImage';
import { StaticImage } from 'gatsby-plugin-image';

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
      <div className={styles.theme}>
        <Cloud text="Ciao sono Giuseppe Becci, l' organizzatore dell'evento Naturalmente Tecnologici. Il tema di quest'anno mi è venuto in mente leggendo ..." />
        <CardImage>
          <StaticImage
            src="../../../images/crew/becci.jpg"
            width={200}
            height={250}
            className={styles.becci}
            alt="Giuseppe Becci"
            layout="constrained"
          />
        </CardImage>
      </div>
    </>
  );
};

export default Index;
