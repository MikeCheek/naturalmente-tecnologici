import React from 'react';
import * as styles from './index.module.scss';
import { StaticImage } from 'gatsby-plugin-image';
import SectionImageCTA from '../SectionImageCTA';
import Heading from '../../atoms/Heading';

const Index = () => {
  const image0 = (
    <StaticImage
      quality={80}
      alt="Syskrack foto 1"
      src="../../../images/syskrack/camp0.jpg"
      layout="constrained"
      width={700}
      height={500}
    />
  );
  const image1 = (
    <StaticImage
      quality={80}
      alt="Syskrack foto 2"
      src="../../../images/syskrack/camp1.jpg"
      layout="constrained"
      width={700}
      height={500}
    />
  );

  return (
    <>
      <div className={styles.heading}>
        <Heading text="L'associazione" />
      </div>
      <SectionImageCTA
        title="CONOSCI SYSKRACK?"
        text={`L'associazione Syskrack Giuseppe Porsia è un'associazione senza scopo di lucro con sede a Grassano nata in
          memoria del nostro Peps, scomparso prematuramente il 5 Luglio 2013.
          <br />
          Syskrack è una community glocale <br/>(globale + locale), connessa tramite internet, tramite che agisce localmente attraverso luoghi fisici, i laboratori.`}
        buttonHref="https://syskrack.org"
        buttonText="SCOPRI L'ASSOCIAZIONE"
        imageOrVideo={image0}
      />
      <SectionImageCTA
        title="LA NOSTRA FILOSOFIA"
        text={`Syskrack era il nickname di Giuseppe Porsia e significa: <br/>System + Kracking = "Rompere il sistema”.
        Come? trovando i <b><em>bug</em></b> della società per riuscire ad <b><em>hackerarla</em></b>, modificarne il comportamento, riportandolo alla consapevolezza, all'umanità, alla scienza e alla natura.
        <br/> <br/>
        Crediamo fortemente che chi, in un modo o nell'altro, abbia un privilegio debba metterlo a disposizione di chi non lo ha per per far sì che possa acquisirlo. `}
        buttonHref="https://syskrack.org"
        buttonText="SCOPRI L'ASSOCIAZIONE"
        imageOrVideo={image1}
        reversed
      />
    </>
  );
};

export default Index;
