import React from 'react';
import * as styles from './index.module.scss';
import { ButtonProps } from './index.types';
import { Link } from 'gatsby';

const Index = ({
  text,
  onClick,
  href,
  title,
  hoverWhite = false,
  internal = false,
  bigger = false,
  children,
}: ButtonProps) => {
  const className = `${bigger ? styles.bigButton : styles.button} ${hoverWhite ? styles.hoverWhite : ''}`;
  const style: React.CSSProperties = children ? { paddingRight: '40px' } : {};
  return (
    <>
      {onClick ? (
        <button onClick={onClick} title={title} className={className} style={style}>
          {text}
          <span className={styles.span}></span>
          <span className={styles.span}></span>
          <span className={styles.span}></span>
          <span className={styles.span}></span>
          {children}
        </button>
      ) : href ? (
        internal ? (
          <Link to={href} title={title} className={className} style={style}>
            {text}

            <span className={styles.span}></span>
            <span className={styles.span}></span>
            <span className={styles.span}></span>
            <span className={styles.span}></span>
            {children}
          </Link>
        ) : (
          <a href={href} title={title} className={className} style={style} rel="noopener noreferrer" target="_blank">
            {text}

            <span className={styles.span}></span>
            <span className={styles.span}></span>
            <span className={styles.span}></span>
            <span className={styles.span}></span>
            {children}
          </a>
        )
      ) : (
        <></>
      )}
    </>
  );
};

export default Index;
