import React from 'react';
import * as styles from './index.module.scss';
import { CloudProps } from './index.types';

const Index = ({ text }: CloudProps) => {
  return (
    <div>
      <div className={styles.cloud}>
        <em>"{text}"</em>
      </div>
    </div>
  );
};

export default Index;
