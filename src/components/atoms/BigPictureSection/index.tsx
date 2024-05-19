import React from 'react';
import { BigPictureSectionProps } from './index.types';
import * as styles from './index.module.scss';

const Index = ({ children, text, reverse = false }: BigPictureSectionProps) => {
  return (
    <div className={reverse ? styles.wrapReverse : styles.wrap}>
      <h4 dangerouslySetInnerHTML={{ __html: text }}></h4>
      <div className={reverse ? styles.bigImageReverse : styles.bigImage}>
        <span></span>
        {children}
      </div>
    </div>
  );
};

export default Index;
