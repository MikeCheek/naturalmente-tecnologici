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
      <h4>{data.name}</h4>
      <p className={styles.desc}>{data.description}</p>
      <div className={styles.colWrap}>
        {bar}
        {data.timeline.map((item, key) => (
          <div key={key} className={styles.itemWrap}>
            <div className={key % 2 == 0 ? styles.item : styles.itemReversed} key={key}>
              <p className={styles.title} dangerouslySetInnerHTML={{ __html: item.title }}></p>
              {circle}
              <span className={styles.info}>
                <p className={styles.time}>{item.time}</p>
                {item.type ? <p>{item.type}</p> : <></>}
                {item.location ? (
                  <p
                    className={styles.location}
                    style={key % 2 == 0 ? { marginRight: 'auto' } : { marginLeft: 'auto' }}
                  >
                    {item.location}
                  </p>
                ) : (
                  <></>
                )}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Index;
