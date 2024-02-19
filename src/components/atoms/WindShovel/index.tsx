import React from 'react';
import { WindShovelProps } from './index.types';
import WindShovel from '../../../assets/windShovel.svg';
import WindShovelSlow from '../../../assets/windShovelSlow.svg';
import * as styles from './index.module.scss';

const Index = ({ color, slower = false }: WindShovelProps) => {
  const ShovelSVG = slower ? WindShovelSlow : WindShovel;
  return <ShovelSVG className={styles.shovel} width={80} height={193} fill={color} />;
};

export default Index;
