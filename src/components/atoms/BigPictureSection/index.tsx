import React from 'react';
import { BigPictureSectionProps } from './index.types';
import * as styles from './index.module.scss';
import ShowOnView from '../ShowOnView';

const Index = ({ children, title, text, reverse = false }: BigPictureSectionProps) => {
  return (
    <div className={styles.wrap}>
      <ShowOnView className={reverse ? styles.wrapTextReverse : styles.wrapText}>
        <h4 dangerouslySetInnerHTML={{ __html: title }}></h4>
        <p dangerouslySetInnerHTML={{ __html: text ?? '' }}></p>
      </ShowOnView>

      <div className={reverse ? styles.bigImageReverse : styles.bigImage}>
        <span></span>
        {children}
      </div>
    </div>
  );
};

export default Index;
