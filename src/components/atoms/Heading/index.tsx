import React from 'react';
import * as styles from './index.module.scss';
import { HeadingProps } from './index.types';

const Index = ({ text, marginTop = false, smaller = false, main = false }: HeadingProps) => {
  return (
    <div
      className={styles.headingWrap}
      id={text
        .toLowerCase()
        .replace(/ /g, '-')
        .replace(/[^(a-z0-9\-)]/gi, '')}
      style={marginTop ? { marginTop: '70px' } : {}}
    >
      <div className={styles.orange}></div>
      {main ? (
        <h1 className={styles.heading} dangerouslySetInnerHTML={{ __html: text }}></h1>
      ) : smaller ? (
        <h3 className={styles.heading} dangerouslySetInnerHTML={{ __html: text }}></h3>
      ) : (
        <h2 className={styles.heading} dangerouslySetInnerHTML={{ __html: text }}></h2>
      )}
    </div>
  );
};

export default Index;
