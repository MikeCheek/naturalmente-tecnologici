import React from 'react';
import Hand from '../../../assets/hand.svg';
import * as styles from './index.module.scss';

const Index = () => {
  return (
    <div>
      <div className={styles.banner}>
        <h2>ALT!</h2>
        <h2>LO SAI COSA SIGNIFICA ESSERE BIFOLCO?</h2>
        <Hand />
      </div>
    </div>
  );
};

export default Index;
