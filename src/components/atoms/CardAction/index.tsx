import React from 'react';
import { FastActionProps } from './index.types';
import { Link } from 'gatsby';
import * as styles from './index.module.scss';

const Index = ({ text, icon, buttonHref, buttonText, linkType = 'external' }: FastActionProps) => {
  return (
    <div className={styles.wrap}>
      {icon}
      <p dangerouslySetInnerHTML={{ __html: text }}></p>
      {linkType == 'external' ? (
        <a className={styles.button} href={buttonHref} title={buttonText} rel="noopener noreferrer" target="_blank">
          {buttonText}
        </a>
      ) : (
        <Link className={styles.button} to={buttonHref}>
          {buttonText}
        </Link>
      )}
    </div>
  );
};

export default Index;
