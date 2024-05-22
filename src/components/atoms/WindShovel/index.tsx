import React from 'react';
import { WindShovelProps } from './index.types';
import WindShovel from '../../../assets/windShovel.svg';
import * as styles from './index.module.scss';

const Index = ({ color, slower = false }: WindShovelProps) => {
  return <WindShovel className={slower ? styles.shovelSlower : styles.shovel} width={80} fill={color} />;
};

export default Index;
