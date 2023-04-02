import React from 'react';
import { FlowerProps } from './index.types';
import Flower from '../../../assets/flower.svg';
import * as styles from './index.module.scss';

const Index = ({ color }: FlowerProps) => {
  return <Flower className={styles.flower} width={80} height={193} fill={color} />;
};

export default Index;
