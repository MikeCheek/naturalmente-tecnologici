import React from 'react';
import { CardImageProps } from './index.types';
import * as styles from './index.module.scss';

const Index = ({ children, reversed = false }: CardImageProps) => {
  return (
    <div className={styles.wrap}>
      <div className={reversed ? styles.orangeReversed : styles.orange}></div>
      <div className={styles.image}>{children}</div>
    </div>
  );
};

export default Index;
