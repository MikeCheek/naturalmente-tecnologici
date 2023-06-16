import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';
import * as styles from './index.module.scss';
import Heading from '../Heading';
import Syskrack from '../../../assets/syskrack.svg';
import IBM from '../../../assets/partner/IBM.svg';
import ShowOnView from '../ShowOnView';

const Index = () => {
  return (
    <div className={styles.partners}>
      <Heading text="Powered By" />
      <ShowOnView className={styles.wrap}>
        <a href="https://www.syskrack.org/" rel="noopener noreferrer" target="_blank">
          <Syskrack className={styles.logo} width={180} />
        </a>
        <h4>
          Selezioniamo partner che abbiano voglia di investire nella cultura e nello sviluppo delle persone e del
          territorio e ad accettare la nostra sfida collettiva.
          <br />
          Vogliamo un'esperienza di impatto positivo e di risonanza nella community e sul luogo.
        </h4>
      </ShowOnView>
      <Heading text="Community Partner" />
      <ShowOnView className={styles.wrap}>
        {/*<a href="http://www.hackability.it/" rel="noopener noreferrer" target="_blank">
          <StaticImage
            layout="constrained"
            src="../../../images/partners/hackability.jpg"
            className={styles.logo}
            alt="Hackability"
            width={180}
          />
        </a>*/}
        <a href="" rel="noopener noreferrer" target="_blank">
          <StaticImage
            layout="constrained"
            src="../../../images/partners/potenza_urban_art.jpg"
            className={styles.logo}
            alt="Potenza Urban Art"
            width={180}
          />
        </a>
        <a href="https://www.ashoka.org" rel="noopener noreferrer" target="_blank">
          <StaticImage
            layout="constrained"
            src="../../../images/partners/ashoka.jpg"
            className={styles.logo}
            alt="Potenza Urban Art"
            width={180}
          />
        </a>
      </ShowOnView>
      <Heading text="Activity Partner" />
      <ShowOnView className={styles.wrap}>
        <a href="https://skillsbuild.org/" rel="noopener noreferrer" target="_blank">
          <IBM className={styles.logoHorizontal} height={40} />
        </a>
      </ShowOnView>
    </div>
  );
};

export default Index;
