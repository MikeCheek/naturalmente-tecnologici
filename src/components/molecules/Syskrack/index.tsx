import React from 'react';
import * as styles from './index.module.scss';
import { StaticImage } from 'gatsby-plugin-image';
import SectionImageCTA from '../SectionImageCTA';

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
    <>
      <SectionImageCTA
        title="CONOSCI SYSKRACK?"
        text={`L'associazione Syskrack Giuseppe Porsia è un'associazione senza scopo di lucro con sede a Grassano nata in
          memoria del nostro Peps, scomparso prematuramente il 5 Luglio 2013.
          <br />
          Giuseppe credeva fermamente nella possibilità di vivere in un mondo migliore e lavorava attivamente per la sua
          realizzazione; era convinto che grazie al piccolo contributo del singolo fatto in base alle proprie
          possibilità si potevano raggiungere grandi obbiettivi.`}
        buttonHref="https://syskrack.org"
        buttonText="SCOPRI L'ASSOCIAZIONE"
        image={image}
      />
      <SectionImageCTA
        title="LA NOSTRA FILOSOFIA"
        text={`Syskrack era il nickname di Giuseppe Porsia e significa: System + Kracking = "Rompere il sistema”.
        Come? trovando i <b><em>bug</em></b> della società per riuscire ad <b><em>hackerarla</em></b>, modificarne il comportamento, riportandolo alla consapevolezza, all'umanità, alla scienza e alla natura.
        <br/> <br/>
        Crediamo fortemente che chi, in un modo o nell'altro, abbia un privilegio debba metterlo a disposizione di chi non lo ha per per far sì che possa acquisirlo. 
        <br/>
        Syskrack è una community glocale, connessa tramite internet, tramite che agisce localmente attraverso luoghi fisici, i laboratori.`}
        buttonHref="https://syskrack.org"
        buttonText="SCOPRI L'ASSOCIAZIONE"
        image={image}
        reversed
      />
    </>
  );
};

export default Index;
