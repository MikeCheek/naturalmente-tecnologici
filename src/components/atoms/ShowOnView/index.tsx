import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import ShowOnViewProps from './index.types';
import * as styles from './index.module.scss';

const Index = ({ children, triggerOnce = true, className, style, setInView }: ShowOnViewProps) => {
  const [ref, inView, _entry] = useInView({
    threshold: 0.5,
    // rootMargin: '5% 0px 5% 0px',
    fallbackInView: true,
    triggerOnce: triggerOnce,
  });

  useEffect(() => {
    if (setInView) setInView(inView);
  }, [inView]);

  return (
    <div className={`${className ?? ''} ${inView ? styles.wrapShown : styles.wrap}`} style={style ?? {}} ref={ref}>
      {children}
    </div>
  );
};

export default Index;
