import React from 'react';
import * as styles from './index.module.scss';
import SingleSectionProps from './index.types';

const Index = ({ children, brighter = false }: SingleSectionProps) => {
  return (
    <div
      className={styles.wrap}
      style={{ borderColor: brighter ? 'var(--nt-orange)' : 'var(--nt-transparent-orange)' }}
    >
      <div className={styles.outShadow}></div>
      <div className={styles.inShadow}></div>
      {children}
    </div>
  );
};

export default Index;
