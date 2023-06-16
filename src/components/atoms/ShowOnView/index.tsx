import React from 'react';
import { useInView } from 'react-intersection-observer';
import ShowOnViewProps from './index.types';
import * as styles from './index.module.scss';

const Index = ({ children, triggerOnce = true, className, style }: ShowOnViewProps) => {
  const [ref, inView, _entry] = useInView({
    threshold: 0,
    rootMargin: '10% 0px -20% 0px',
    fallbackInView: true,
    triggerOnce: triggerOnce,
  });
  return (
    <div className={`${className ?? ''} ${inView ? styles.wrapShown : styles.wrap}`} style={style ?? {}} ref={ref}>
      {children}
    </div>
  );
};

export default Index;
