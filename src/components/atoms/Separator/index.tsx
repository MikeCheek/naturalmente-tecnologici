import React from 'react';
import * as styles from './index.module.scss';
import { SeparatorProps } from './index.types';

const Index = ({ width = '80%', height = '3px', color = 'var(--nt-orange)' }: SeparatorProps) => {
  return <div style={{ width: width, height: height, backgroundColor: color }} className={styles.separator}></div>;
};

export default Index;
