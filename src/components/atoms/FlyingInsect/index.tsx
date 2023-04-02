import React, { useState } from 'react';
import Insect from '../../../assets/insect.svg';
import { InsectProps } from './index.types';
import * as styles from './insect.module.scss';

const Index = ({ top = 0, onClick }: InsectProps) => {
  const [key, setKey] = useState<number>(0);

  const handleClick = () => {
    if (onClick) onClick();
    if (key == 0) setKey(1);
    else setKey(0);
  };

  return (
    <span key={key} style={{ top: top + '%', animationDelay: top / 5 + 's' }} className={styles.insect}>
      <Insect onClick={handleClick} width={88} style={{ transform: 'rotate(132.04deg)' }} />
    </span>
  );
};

export default Index;
