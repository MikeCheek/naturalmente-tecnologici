import React from 'react';
import * as styles from './index.module.scss';
import CardImage from '../../atoms/CardImage';
import { SectionImageCTAProps } from './index.types';

const Index = ({ image, text, title, buttonHref, buttonText, reversed = false }: SectionImageCTAProps) => {
  return (
    <div className={reversed ? styles.wrapReversed : styles.wrap}>
      <div className={reversed ? styles.textReversed : styles.text}>
        <h2>{title}</h2>
        <p dangerouslySetInnerHTML={{ __html: text }}></p>
        <a href={buttonHref} title={buttonText} className={styles.button}>
          {buttonText}
        </a>
      </div>
      <CardImage>{image}</CardImage>
    </div>
  );
};

export default Index;
