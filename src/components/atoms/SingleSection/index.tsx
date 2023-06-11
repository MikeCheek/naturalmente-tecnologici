import React from 'react';
import * as styles from './index.module.scss';
import SingleSectionProps from './index.types';

const Index = ({ children }: SingleSectionProps) => {
  return <div className={styles.wrap}>{children}</div>;
};

export default Index;
