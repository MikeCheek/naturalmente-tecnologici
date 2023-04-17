import React, { useState } from 'react';
import Insect from '../../../assets/insect.svg';
import { InsectProps } from './index.types';
import * as styles from './insect.module.scss';

const Index = ({ top = 0, onClick }: InsectProps) => {
  const [on, setOn] = useState<boolean>(false);

  const handleClick = () => {
    if (onClick) onClick();
    setOn(true);
    setTimeout(() => setOn(false), 10000);
  };

  return (
    <div style={{ top: top + '%', animationDelay: top / 5 + 's' }} className={styles.insect}>
      <div className={styles.svgWrap} style={{ animationDelay: top / 5 + 's' }}>
        <Insect
          onClick={handleClick}
          width={88}
          fill={on ? 'var(--nt-orange)' : 'var(--nt-dark-green)'}
          style={{ transform: 'rotate(132.04deg)', animationDelay: top / 4 + 's' }}
          className={on ? '' : styles.svg}
        />
      </div>
    </div>
  );
};

export default Index;
