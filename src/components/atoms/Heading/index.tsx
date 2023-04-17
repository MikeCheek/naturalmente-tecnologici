import React from 'react';
import * as styles from './index.module.scss';
import { HeadingProps } from './index.types';

const Index = ({ text }: HeadingProps) => {
  return (
    <div className={styles.headingWrap}>
      <div className={styles.orange}></div>
      <h2 className={styles.heading}>{text}</h2>
    </div>
  );
};

export default Index;
