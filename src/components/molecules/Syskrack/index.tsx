import React from 'react';
import * as styles from './index.module.scss';
import { StaticImage } from 'gatsby-plugin-image';
import CardImage from '../../atoms/CardImage';

const Index = () => {
  const image = (
    <StaticImage
      alt="Logo Syskrack"
      src="../../../images/camp.jpg"
      layout="constrained"
      width={350}
      className={styles.image}
    />
  );

  return (
    <div className={styles.wrap}>
      <div className={styles.text}>
        <h2>CONOSCI SYSKRACK?</h2>
        <p>
          L'associazione Syskrack Giuseppe Porsia è un'associazione senza scopo di lucro con sede a Grassano nata in
          memoria del nostro Peps, scomparso prematuramente il 5 Luglio 2013.
          <br />
          Giuseppe credeva fermamente nella possibilità di vivere in un mondo migliore e lavorava attivamente per la sua
          realizzazione; era convinto che grazie al piccolo contributo del singolo fatto in base alle proprie
          possibilità si potevano raggiungere grandi obbiettivi.
        </p>
        <a href="https://syskrack.org" title="Explore Syskrack" className={styles.button}>
          SCOPRI L'ASSOCIAZIONE
        </a>
      </div>
      <CardImage>{image}</CardImage>
    </div>
  );
};

export default Index;
