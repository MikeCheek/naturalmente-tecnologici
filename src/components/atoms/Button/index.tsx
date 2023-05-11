import React from 'react';
import * as styles from './index.module.scss';
import { ButtonProps } from './index.types';

const Index = ({ text, onClick, href, title, hoverWhite = false }: ButtonProps) => {
  return (
    <>
      {onClick ? (
        <button onClick={onClick} title={title} className={`${styles.button} ${hoverWhite ? styles.hoverWhite : ''}`}>
          {text} <span className={styles.span}></span>
          <span className={styles.span}></span>
          <span className={styles.span}></span>
          <span className={styles.span}></span>
        </button>
      ) : href ? (
        <a href={href} title={title} className={`${styles.button} ${hoverWhite ? styles.hoverWhite : ''}`}>
          {text} <span className={styles.span}></span>
          <span className={styles.span}></span>
          <span className={styles.span}></span>
          <span className={styles.span}></span>
        </a>
      ) : (
        <></>
      )}
    </>
  );
};

export default Index;
