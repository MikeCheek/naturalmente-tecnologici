import React from 'react';
import * as styles from './index.module.scss';
import ImageTempProps from './index.types';

const ImageTemp = ({ name }: ImageTempProps) => {
  return (
    <div className={styles.wrap}>
      <div className={styles.reflect}></div>
      <div className={styles.reflect2}></div>
      {name ? <p>{name}</p> : null}
    </div>
  );
};

export default ImageTemp;
