import React from 'react';
import * as styles from './index.module.scss';
import CardImage from '../../atoms/CardImage';
import { SectionImageCTAProps } from './index.types';

const Index = ({ image, text, title, buttonHref, buttonText, reversed = false }: SectionImageCTAProps) => {
  return (
    <div className={reversed ? styles.wrapReversed : styles.wrap}>
      <div className={reversed ? styles.textReversed : styles.text}>
        <h3>{title}</h3>
        <CardImage onlyMobile reversed={reversed}>
          {image}
        </CardImage>
        <p dangerouslySetInnerHTML={{ __html: text }}></p>
        <a href={buttonHref} title={buttonText} className={styles.button}>
          {buttonText}
        </a>
      </div>
      <CardImage onlyDesktop reversed={reversed}>
        {image}
      </CardImage>
    </div>
  );
};

export default Index;
