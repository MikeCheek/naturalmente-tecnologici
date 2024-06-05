import React, { memo } from 'react';
import { FlowerProps } from './index.types';
import { ReactComponent as Flower } from '../../../assets/flower.svg';
import * as styles from './index.module.scss';

const Index = memo(({ color }: FlowerProps) => {
  return <Flower className={styles.flower} width={80} height={193} fill={color} />;
});

export default Index;
