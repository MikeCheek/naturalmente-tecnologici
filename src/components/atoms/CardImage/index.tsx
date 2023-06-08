import React from 'react';
import { CardImageProps } from './index.types';
import * as styles from './index.module.scss';

const Index = ({
  children,
  reversed = false,
  onlyDesktop = false,
  onlyMobile = false,
  bigger = false,
}: CardImageProps) => {
  return (
    <div className={`${styles.wrap} ${onlyMobile ? styles.onlyMobile : ''} ${onlyDesktop ? styles.onlyDesktop : ''}`}>
      <div className={reversed ? styles.orangeReversed : styles.orange}></div>
      <div className={bigger ? styles.sectionImage : styles.image}>{children}</div>
    </div>
  );
};

export default Index;
