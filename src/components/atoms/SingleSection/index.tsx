import React from 'react';
import * as styles from './index.module.scss';
import SingleSectionProps from './index.types';
import { useInView } from 'react-intersection-observer';
import ShowOnView from '../ShowOnView';

const Index = ({ children, brighter = false }: SingleSectionProps) => {
  return (
    <ShowOnView className={styles.wrapper}>
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
    </ShowOnView>
  );
};

export default Index;
