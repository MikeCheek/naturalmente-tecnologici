import React from 'react';
import * as styles from './index.module.scss';
import SingleSectionProps from './index.types';
import ShowOnView from '../ShowOnView';

const Index = ({ children, brighter = false, showOnView = true, fullWidth = false }: SingleSectionProps) => {
  const Section = (
    <div
      className={styles.wrap}
      style={{
        borderColor: brighter ? 'var(--nt-orange)' : 'var(--nt-transparent-orange)',
      }}
    >
      <div className={styles.outShadow}></div>
      <div className={styles.inShadow}></div>
      {children}
    </div>
  );
  return showOnView ? (
    <ShowOnView className={styles.wrapper} style={fullWidth ? { width: 'max-content' } : {}}>
      {Section}
    </ShowOnView>
  ) : (
    <div className={styles.wrapper} style={fullWidth ? { width: 'max-content' } : {}}>
      {Section}
    </div>
  );
};

export default Index;
