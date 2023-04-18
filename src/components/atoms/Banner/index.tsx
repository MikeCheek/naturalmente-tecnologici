import React from 'react';
import * as styles from './index.module.scss';
import Hand from '../../../assets/hand.svg';
import { BannerProps } from './index.types';

const Index = ({ text }: BannerProps) => {
  return (
    <div className={styles.banner}>
      <h2>ALT!</h2>
      <h2>{text}</h2>
      <Hand width={160} height={218} strokeWidth={10} />
    </div>
  );
};

export default Index;
