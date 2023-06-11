import React from 'react';
import * as styles from './index.module.scss';
import SingleSectionProps from './index.types';

const Index = ({ children }: SingleSectionProps) => {
  return (
    <div className={styles.wrap}>
      <div className={styles.outShadow}></div>
      <div className={styles.inShadow}></div>
      {children}
    </div>
  );
};

export default Index;
