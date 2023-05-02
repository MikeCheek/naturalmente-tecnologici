import React from 'react';
import * as styles from './index.module.scss';
import Partners from '../../atoms/Partners';
import Collina from '../../../assets/collina.svg';

const Index = () => {
  return (
    <div className={styles.wrap}>
      <Partners />
      <Collina width="1440" className={styles.collina} />
    </div>
  );
};

export default Index;
