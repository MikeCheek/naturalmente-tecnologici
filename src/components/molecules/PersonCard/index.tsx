import React from 'react';
import * as styles from './index.module.scss';
import { PersonCardProps } from './index.types';
import CardImage from '../../atoms/CardImage';

const Index = ({ image, name, role, reversed = false }: PersonCardProps) => {
  return (
    <div className={styles.wrap}>
      <CardImage reversed={reversed}>{image}</CardImage>
      <p>{name}</p>
      <p className={styles.role}>{role}</p>
    </div>
  );
};

export default Index;
