import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';
import * as styles from './index.module.scss';
import Heading from '../Heading';

const Index = () => {
  return (
    <div className={styles.partners}>
      <Heading text="Partner tecnici" />
      <div className={styles.wrap}>
        <a href="https://www.syskrack.org/" rel="noopener noreferrer" target="_blank">
          <StaticImage
            src="../../../images/syskrack-logo.png"
            className={styles.logo}
            alt="Potenza Urban Art"
            width={180}
          />
        </a>
      </div>
      <Heading text="Media Partner" />
      <div className={styles.wrap}>
        <a href="https://www.syskrack.org/" rel="noopener noreferrer" target="_blank">
          <StaticImage
            src="../../../images/syskrack-logo.png"
            className={styles.logo}
            alt="Italia che cambia"
            width={180}
          />
        </a>
      </div>
      <Heading text="Community Partner" />
      <div className={styles.wrap}>
        <a href="https://www.syskrack.org/" rel="noopener noreferrer" target="_blank">
          <StaticImage
            src="../../../images/syskrack-logo.png"
            className={styles.logo}
            alt="Ashoka Italia"
            width={180}
          />
        </a>
      </div>
    </div>
  );
};

export default Index;
