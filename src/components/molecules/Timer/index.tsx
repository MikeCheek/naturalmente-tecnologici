import React, { useEffect, useState } from 'react';
import * as styles from './index.module.scss';
import randInt from '../../../hooks/randInt';
import { TimerProps } from './index.types';

const Index = ({ shutOffTimer, date }: TimerProps) => {
  const [days, setDays] = useState<number>(0);
  const [hours, setHours] = useState<number>(0);
  const [minutes, setMinutes] = useState<number>(0);
  const [seconds, setSeconds] = useState<number>(0);

  const countDownDate = date.getTime();

  useEffect(() => {
    const interval = setInterval(() => {
      setDays(Math.floor(randInt(0, 99)));
      setHours(Math.floor(randInt(0, 23)));
      setMinutes(Math.floor(randInt(0, 59)));
      setSeconds(Math.floor(randInt(0, 59)));
    }, 50);

    setTimeout(() => {
      clearInterval(interval);
    }, 1000);

    const timeRemaining = setInterval(() => {
      const now = new Date().getTime();
      const distance = countDownDate - now;
      const d = Math.floor(distance / (1000 * 60 * 60 * 24));
      const h = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const m = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const s = Math.floor((distance % (1000 * 60)) / 1000);
      days != d ? setDays(d) : null;
      hours != h ? setHours(h) : null;
      minutes != m ? setMinutes(m) : null;
      seconds != s ? setSeconds(s) : null;
      if (distance < 0) {
        shutOffTimer();
        clearInterval(timeRemaining);
      }
    }, 1000);

    return clearInterval(undefined);
  }, []);
  return (
    <div className={styles.timer}>
      <span>
        <div className={styles.timeWrap}>
          <p className={styles.time}>{days}</p>
          <p>Giorni</p>
        </div>
        <div className={styles.timeWrap}>
          <p className={styles.time}>{hours}</p>
          <p>Ore</p>
        </div>
      </span>
      <span>
        <div className={styles.timeWrap}>
          <p className={styles.time}>{minutes}</p>
          <p>Minuti</p>
        </div>
        <div className={styles.timeWrap}>
          <p className={styles.time}>{seconds}</p>
          <p>Secondi</p>
        </div>
      </span>
    </div>
  );
};

export default Index;
