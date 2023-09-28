import React from 'react';

import * as styles from './index.module.scss';
import Button from '../../atoms/Button';
import CardImage from '../../atoms/CardImage';
import { SectionImageCTAProps } from './index.types';
import ShowOnView from '../../atoms/ShowOnView';

const Index = ({ imageOrVideo, text, title, buttonHref, buttonText, reversed = false }: SectionImageCTAProps) => {
  return (
    <div className={reversed ? styles.wrapReversed : styles.wrap}>
      <ShowOnView className={reversed ? styles.textReversed : styles.text}>
        {title ? <h3>{title}</h3> : <></>}
        <CardImage onlyMobile reversed={reversed} bigger>
          <>{imageOrVideo}</>
        </CardImage>
        <p dangerouslySetInnerHTML={{ __html: text }}></p>
        <Button text={buttonText} href={buttonHref} title={buttonText} />
      </ShowOnView>
      <CardImage onlyDesktop reversed={reversed} bigger>
        <>{imageOrVideo}</>
      </CardImage>
    </div>
  );
};

export default Index;
