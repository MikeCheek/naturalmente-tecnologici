import React from 'react';
import * as styles from './index.module.scss';
import { ButtonProps } from './index.types';
import { Link } from 'gatsby';

const Index = ({ text, onClick, href, title, hoverWhite = false, internal = false, bigger = false }: ButtonProps) => {
  const className = `${bigger ? styles.bigButton : styles.button} ${hoverWhite ? styles.hoverWhite : ''}`;

  return (
    <>
      {onClick ? (
        <button onClick={onClick} title={title} className={className}>
          {text} <span className={styles.span}></span>
          <span className={styles.span}></span>
          <span className={styles.span}></span>
          <span className={styles.span}></span>
        </button>
      ) : href ? (
        internal ? (
          <Link to={href} title={title} className={className}>
            {text} <span className={styles.span}></span>
            <span className={styles.span}></span>
            <span className={styles.span}></span>
            <span className={styles.span}></span>
          </Link>
        ) : (
          <a href={href} title={title} className={className} rel="noopener noreferrer" target="_blank">
            {text} <span className={styles.span}></span>
            <span className={styles.span}></span>
            <span className={styles.span}></span>
            <span className={styles.span}></span>
          </a>
        )
      ) : (
        <></>
      )}
    </>
  );
};

export default Index;
