import React, { useEffect, useState } from 'react';
import Steps from '../../../assets/steps.svg';
import * as styles from './index.module.scss';
import ScrollySectionProps from './index.types';
import { useInView } from 'react-intersection-observer';

const Index = ({ children, reverse = false, first = false }: ScrollySectionProps) => {
  const [step, setStep] = useState<number>(0);

  let base = 0;

  const { ref, inView, entry } = useInView({
    threshold: 0,
    initialInView: first,
  });

  const makeStep = () => {
    if (entry) {
      const rect = entry.target.getBoundingClientRect();
      const a = -rect.top;
      setStep(Math.round((a / window.innerHeight + 0.2) * 10));
    }
  };

  useEffect(() => {
    if (inView) {
      base = window.scrollY;
      window.addEventListener('scroll', () => makeStep());
    } else window.removeEventListener('scroll', () => {});

    return window.removeEventListener('scroll', () => {});
  }, [inView]);

  const pos = (key: number) => 15 * key + 5;
  const curve = (key: number) => pos(key) + 30 - (6 - Math.abs(3 - key)) * 10 + (key == 0 ? 10 : 0);
  const curveTop = (key: number) => pos(key) + 30 - Math.abs(3 - key) * 10;

  return (
    <div className={styles.wrap}>
      <div className={reverse ? styles.childReverse : styles.child}>{children}</div>
      <div ref={ref} className={styles.steps}>
        {new Array(6).fill(0).map((_, key) => (
          <Steps
            key={key}
            width={50}
            fill={step >= key ? 'var(--nt-orange)' : 'var(--nt-dark-green)'}
            style={{
              transform: `rotateZ(${
                180 + // to make steps point down
                (reverse ? -1 : 1) * // to change direction if section is reversed
                  (key * 15) + // amount to steer
                (key == 0 ? (reverse ? 30 : -30) : 0) // to make first steps coherent with precedents
              }deg)`,
              top: `${curveTop(key)}%`,
              right: reverse ? '' : `${curve(key)}%`,
              left: reverse ? `${curve(key)}%` : '',
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Index;
