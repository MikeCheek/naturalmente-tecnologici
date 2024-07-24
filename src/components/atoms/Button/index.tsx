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
  simple = false,
}: ButtonProps) => {
  const className = `${bigger ? styles.bigButton : styles.button} ${hoverWhite ? styles.hoverWhite : ''}`;
  const classNameSimple = styles.buttonSimple;
  const style: React.CSSProperties = children ? { paddingRight: '40px' } : {};

  const child = simple ? (
    <>
      {text}
      {children}
    </>
  ) : (
    <>
      {text}
      <span className={styles.span}></span>
      <span className={styles.span}></span>
      <span className={styles.span}></span>
      <span className={styles.span}></span>
      {children}
    </>
  );

  return (
    <>
      {onClick ? (
        <button onClick={onClick} title={title} className={simple ? classNameSimple : className} style={style}>
          {child}
        </button>
      ) : href ? (
        internal ? (
          <Link to={href} title={title} className={simple ? classNameSimple : className} style={style}>
            {child}
          </Link>
        ) : (
          <a
            href={href}
            title={title}
            className={simple ? classNameSimple : className}
            style={style}
            rel="noopener noreferrer"
            target="_blank"
          >
            {child}
          </a>
        )
      ) : (
        <></>
      )}
    </>
  );
};

export default Index;
