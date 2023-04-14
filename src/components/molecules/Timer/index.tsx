import React, { useEffect, useState } from 'react';
import * as styles from './timer.module.scss';
import Circle from '../../atoms/Circle';
import Connection from '../../atoms/Connection';
import randInt from '../../../hooks/randInt';

const Index = ({ shutOffTimer }: { shutOffTimer: any }) => {
  const [days, setDays] = useState<number>(0);
  const [hours, setHours] = useState<number>(0);
  const [minutes, setMinutes] = useState<number>(0);
  const [seconds, setSeconds] = useState<number>(0);

  const countDownDate = new Date('August 11, 2023 00:00:00').getTime();

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

    return clearInterval(timeRemaining);
  }, []);
  return (
    <>
      <div className={styles.timerDesktop}>
        <Circle value={3.5} />
        <Connection value={3.5} />
        <div className={styles.timeWrap}>
          <p className={styles.time}>{days}</p>
          <p>Days</p>
        </div>
        <Connection value={1.5} />
        <div className={styles.timeWrap}>
          <p className={styles.time}>{hours}</p>
          <p>Hours</p>
        </div>
        <Connection value={3} />
        <div className={styles.timeWrap}>
          <p className={styles.time}>{minutes}</p>
          <p>Minutes</p>
        </div>
        <Connection value={2} />
        <div className={styles.timeWrap}>
          <p className={styles.time}>{seconds}</p>
          <p>Seconds</p>
        </div>
        <Connection value={1} />
        <Circle value={1} />
      </div>
      <div className={styles.timerMobile}>
        <div className={styles.timerRow}>
          <Circle value={3.5} />
          <Connection value={3.5} />
          <div className={styles.timeWrap}>
            <p className={styles.time}>{days}</p>
            <p>Days</p>
          </div>
          <Connection value={1.5} />
          <div className={styles.timeWrap}>
            <p className={styles.time}>{hours}</p>
            <p>Hours</p>
          </div>
          <Connection value={3} />
          <Circle value={3} />
        </div>

        <div className={styles.timerRow}>
          <Circle value={3} />
          <Connection value={3} />
          <div className={styles.timeWrap}>
            <p className={styles.time}>{minutes}</p>
            <p>Minutes</p>
          </div>
          <Connection value={2} />
          <div className={styles.timeWrap}>
            <p className={styles.time}>{seconds}</p>
            <p>Seconds</p>
          </div>
          <Connection value={1} />
          <Circle value={1} />
        </div>
      </div>
    </>
  );
};

export default Index;
