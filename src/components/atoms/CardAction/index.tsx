import React from 'react';
import { FastActionProps } from './index.types';
import { Link } from 'gatsby';
import * as styles from './index.module.scss';
import { useInView } from 'react-intersection-observer';

const Index = ({ text, icon, buttonHref, buttonText, linkType = 'external' }: FastActionProps) => {
  const [ref, inView, _entry] = useInView({
    threshold: 0,
    rootMargin: '5% 0px -20% 0px',
    fallbackInView: true,
    // triggerOnce: true,
  });

  return (
    <div className={inView ? styles.wrap : styles.wrapHidden} ref={ref}>
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
