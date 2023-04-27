import React from 'react';
import * as styles from './index.module.scss';
import CardImage from '../../atoms/CardImage';
import { CardPersonProps } from './index.types';

const Index = ({ image, name, role, reversed = false }: CardPersonProps) => {
  return (
    <div className={styles.wrap}>
      <CardImage reversed={reversed}>{image}</CardImage>
      <p className={styles.name}>{name}</p>
      <p className={styles.role}>{role}</p>
    </div>
  );
};

export default Index;
