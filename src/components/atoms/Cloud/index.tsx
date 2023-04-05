import React from 'react';
import * as styles from './index.module.scss';
import { CloudProps } from './index.types';

const Index = ({ text }: CloudProps) => {
  return (
    <div className={styles.wrap}>
      <div className={styles.cloud}>
        <em>"{text}"</em>
      </div>
      <div className={styles.smallOne}></div>
      <div className={styles.smallTwo}></div>
    </div>
  );
};

export default Index;
