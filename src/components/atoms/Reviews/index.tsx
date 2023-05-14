import React from 'react';
import * as styles from './index.module.scss';
import Heading from '../Heading';
import Conference from '../../../assets/reviews/conference.svg';
import Workshop from '../../../assets/reviews/workshop.svg';
import Camping from '../../../assets/reviews/camping.svg';
import Event from '../../../assets/reviews/event.svg';
import { CircularProgressbarWithChildren, buildStyles } from 'react-circular-progressbar';
import { useInView } from 'react-intersection-observer';

const data = [
  {
    topic: 'Conferenze',
    rank: 8.5,
    svg: Conference,
  },
  {
    topic: 'Laboratori',
    rank: 7.714,
    svg: Workshop,
  },
  {
    topic: 'Campeggio',
    rank: 8,
    svg: Camping,
  },
  {
    topic: 'Evento',
    rank: 8.375,
    svg: Event,
  },
];

const Index = () => {
  const [ref, inView, _entry] = useInView({
    threshold: 0,
    rootMargin: '10% 0px -20% 0px',
    fallbackInView: true,
  });

  return (
    <>
      <Heading text="Sulla scorsa edizione..." marginTop />
      <h3 className={styles.subTitle}>Gradimento dei partecipanti</h3>
      <div ref={ref} className={styles.wrap}>
        {data.map((review, key) => (
          <div key={key} className={styles.review}>
            <CircularProgressbarWithChildren
              value={inView ? review.rank * 10 : 1}
              counterClockwise
              styles={buildStyles({
                pathColor: `var(--nt-orange)`,
                trailColor: 'var(--nt-transparent-orange)',
                pathTransitionDuration: 2,
              })}
            >
              <review.svg className={styles.icon} height={40} fill="var(--nt-very-dark-green)" />
              <p className={styles.rank}>{review.rank.toFixed(1)}</p>
            </CircularProgressbarWithChildren>
            <p className={styles.topic}>{review.topic}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Index;
