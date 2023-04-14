import React from 'react';
import * as styles from './index.module.scss';
import { ConnectionProps } from './index.types';

const Index = ({ value }: ConnectionProps) => {
  return <div className={styles.connection} style={{ marginTop: `calc(${value} * 20px)` }}></div>;
};

export default Index;
