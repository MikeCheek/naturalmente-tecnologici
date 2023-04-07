import React from 'react';
import { CardImageProps } from './index.types';
import * as styles from './index.module.scss';

const Index = ({ children }: CardImageProps) => {
  return (
    <div className={styles.wrap}>
      <div className={styles.orange}></div>
      <div className={styles.image}>{children}</div>
    </div>
  );
};

export default Index;
