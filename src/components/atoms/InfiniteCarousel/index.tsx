import React from 'react';
import * as styles from './index.module.scss';
import InfiniteCarouselProps from './index.types';

const Index = ({ children }: InfiniteCarouselProps) => {
  return (
    <div className={styles.slider}>
      <div className={styles.slideTrack}>
        {children.map((item, key) => (
          <div key={key} className={styles.slide}>
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Index;
