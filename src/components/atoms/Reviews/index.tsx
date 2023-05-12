import React from 'react';
import * as styles from './index.module.scss';
import Heading from '../Heading';
import Conference from '../../../assets/reviews/conference.svg';
import Workshop from '../../../assets/reviews/workshop.svg';
import Camping from '../../../assets/reviews/camping.svg';
import Event from '../../../assets/reviews/event.svg';
import { CircularProgressbarWithChildren, buildStyles } from 'react-circular-progressbar';

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
  return (
    <>
      <Heading text="Sulla scorsa edizione..." marginTop />
      <h3 className={styles.subTitle}>Gradimento dei partecipanti</h3>
      <div className={styles.wrap}>
        {data.map((review, key) => (
          <div key={key} className={styles.review}>
            <CircularProgressbarWithChildren
              value={review.rank * 10}
              counterClockwise
              styles={buildStyles({
                pathColor: `var(--nt-orange)`,
                trailColor: 'var(--nt-transparent-orange)',
              })}
            >
              <review.svg className={styles.icon} height={50} fill="var(--nt-very-dark-green)" />
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
