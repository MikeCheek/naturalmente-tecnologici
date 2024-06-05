import React, { useCallback, useEffect, useRef, useState } from 'react';
import * as styles from './index.module.scss';
import SingleSectionProps from './index.types';
import ShowOnView from '../ShowOnView';
import { ReactComponent as SectionDecoration } from '../../../assets/sectionDecoration.svg';
import { getRandomNum } from '../../../utilities/randInt';
import { useInView } from 'react-intersection-observer';

const Index = ({ children, brighter = false, showOnView = true, fullWidth = false }: SingleSectionProps) => {
  const color = brighter ? 'var(--nt-orange)' : 'var(--nt-transparent-orange)';
  const [rands, setRands] = useState<number[]>([10, 10]);
  const divRef = useRef<HTMLDivElement>(null);

  const [ref, inView, _entry] = useInView({
    threshold: 0.5,
    // rootMargin: '-10% 0px -10% 0px',
    fallbackInView: true,
  });

  const getRand = () => {
    const h = divRef.current!.getBoundingClientRect().height - 100;
    return getRandomNum(10, h);
  };

  useEffect(() => {
    setRands([getRand(), getRand()]);
  }, []);

  const Section = (
    <div ref={divRef}>
      <div
        className={`${styles.wrap} ${inView ? styles.lightUp : ''}`}
        ref={ref}
        style={{
          borderColor: color,
          borderWidth: brighter ? 8 : 6,
        }}
      >
        <SectionDecoration fill={color} className={styles.decorationUp} style={{ top: rands[0].toFixed(2) + 'px' }} />
        <SectionDecoration
          fill={color}
          className={styles.decorationDown}
          style={{ bottom: rands[1].toFixed(2) + 'px' }}
        />
        <div className={styles.outShadow}></div>
        <div className={styles.inShadow}></div>
        {children}
      </div>
    </div>
  );
  return showOnView ? (
    <ShowOnView className={styles.wrapper} style={fullWidth ? { width: 'max-content' } : {}}>
      {Section}
    </ShowOnView>
  ) : (
    <div className={styles.wrapper} style={fullWidth ? { width: 'max-content' } : {}}>
      {Section}
    </div>
  );
};

export default Index;
