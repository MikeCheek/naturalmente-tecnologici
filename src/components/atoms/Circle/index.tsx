import React from 'react';
import * as styles from './index.module.scss';
import { CircleProps } from './index.types';

const Index = ({ value }: CircleProps) => {
  return <div className={styles.circle} style={{ marginTop: `calc(${value} * 20px - 5px)` }}></div>;
};

export default Index;
