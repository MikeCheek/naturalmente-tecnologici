import React, { useState } from 'react';
import * as styles from './index.module.scss';
import { CardImageProps } from './index.types';
import ShowOnView from '../ShowOnView';

const Index = ({ children, text }: CardImageProps) => {
  return (
    <ShowOnView>
      <div className={styles.wrap}>
        <div className={styles.sectionImage}>{children}</div>
        <p>{text}</p>
      </div>
    </ShowOnView>
  );
};

export default Index;
