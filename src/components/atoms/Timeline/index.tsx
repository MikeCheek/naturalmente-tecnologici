import React from 'react';
import TimelineProps from './index.types';
import * as styles from './index.module.scss';
import Heading from '../Heading';

const Index = ({ data }: TimelineProps) => {
  const circle = <div className={styles.circle}></div>;
  const bar = <div className={styles.bar}></div>;

  return (
    <div className={styles.wrap}>
      <Heading text={data.day} smaller showOnView={false} />

      {data.timeline.map((item, key) => (
        <div className={styles.itemWrap}>
          <div className={key % 2 == 0 ? styles.item : styles.itemReversed} key={key}>
            <p className={styles.title}>{item.title}</p>
            {circle}
            <span className={styles.info}>
              <p>{item.time}</p>
              <p>{item.location}</p>
            </span>
          </div>
          {key != data.timeline.length - 1 ? bar : <></>}
        </div>
      ))}
    </div>
  );
};

export default Index;
