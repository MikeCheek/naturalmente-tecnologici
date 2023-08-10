import React, { useEffect, useState } from 'react';

import * as styles from './index.module.scss';
import Collina from '../../../assets/collina-lato.svg';
import Flower from '../../atoms/Flower';
import Timer from '../../molecules/Timer';
import { Link } from 'gatsby';
import { Event, nowActive } from '../../../utilities/program';

const Index = () => {
  const [now, setNow] = useState<Event[] | null>(null);

  useEffect(() => {
    const e = nowActive();
    setNow(e);
  }, []);

  return (
    <div className={styles.wrap}>
      <div className={styles.headWrap}>
        <span>
          <Link className={styles.date} to="/#quando-e-dove" title="Quando e dove">
            Bosco Coste, Grottole(MT)
            <br /> 11&gt;13 Agosto 2023
          </Link>
          <h1 className={styles.heading}>
            PROGRAMMA <br />
            CONCERTI, CONFERENZE, WORKSHOP E CAMPING
          </h1>
        </span>
        {now != null ? (
          <div className={styles.inProgressWrap}>
            <h3>Attività in corso</h3>
            {now.map((e) => (
              <div className={styles.inProgress}>
                <p className={styles.timeProgress}>{e.time}</p>
                <p>{e.title}</p>
                <span className={styles.badge}>{e.location}</span>
              </div>
            ))}
          </div>
        ) : (
          <></>
        )}
      </div>
      <div className={styles.orangeFlowers}>
        <Flower color="var(--nt-orange)" />
        <Flower color="var(--nt-orange)" />
        <Flower color="var(--nt-orange)" />
        <Flower color="var(--nt-orange)" />
      </div>
      <Collina width="1440" height="129" className={styles.collina} />
      <div className={styles.white}></div>
    </div>
  );
};

export default Index;
