import React, { useState } from 'react';
import { CardImageProps } from './index.types';
import * as styles from './index.module.scss';

const Index = ({
  children,
  reversed = false,
  onlyDesktop = false,
  onlyMobile = false,
  bigger = false,
}: CardImageProps) => {
  const [rotate, setRotate] = useState<boolean>(false);
  const [smaller, setSmaller] = useState<boolean>(false);

  const handleClick = () => {
    setRotate((curr) => !curr);
    setSmaller(true);
    setTimeout(() => setSmaller(false), 500);
  };

  return (
    <div
      className={`${styles.wrap} ${onlyMobile ? styles.onlyMobile : ''} ${onlyDesktop ? styles.onlyDesktop : ''}`}
      onClick={handleClick}
    >
      <div className={styles.orangeWrap} style={rotate ? { transform: 'rotate(360deg)' } : { transform: 'rotate(0)' }}>
        <div className={reversed ? styles.orangeReversed : styles.orange}></div>
      </div>
      <div className={bigger ? styles.sectionImage : styles.image} style={smaller ? { transform: 'scale(0.9)' } : {}}>
        {children}
      </div>
    </div>
  );
};

export default Index;
