import React, { useEffect } from 'react';
import confetti from 'canvas-confetti';
import * as styles from './index.module.scss';
import SingleSection from '../../atoms/SingleSection';
import { useInView } from 'react-intersection-observer';

const COLORS = ['#025300', '#014900', '#002400', '#0a5908', '#e98a15', '#e98a1560', '#fdfdff'];

const randomInRange = (min: number, max: number) => {
  return Math.random() * (max - min) + min;
};
// const spread = (e?: React.MouseEvent) => {
//   confetti({
//     angle: randomInRange(55, 125),
//     spread: randomInRange(50, 70),
//     particleCount: randomInRange(50, 100),
//     zIndex: 999999,
//     origin: { y: e ? e.clientY : 0.6 },
//     colors: COLORS,
//   });
// };

const Index = () => {
  const [ref, inView, _entry] = useInView({
    threshold: 0,
    rootMargin: '5% 0px 5% 0px',
    fallbackInView: true,
    triggerOnce: true,
  });

  const duration = 3 * 1000;

  const onClick = (e: React.MouseEvent) => {
    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;
    confetti({
      angle: randomInRange(55, 125),
      spread: randomInRange(50, 70),
      particleCount: randomInRange(50, 100),
      origin: { x: x, y: y },
      ticks: 100,
      zIndex: 99999,
      scalar: 1.2,
      colors: COLORS,
    });
  };
  useEffect(() => {
    const defaults = {
      startVelocity: 20,
      spread: 460,
      ticks: 100,
      zIndex: 99999,
      particleCount: 100,
      scalar: 1.2,
      colors: COLORS,
    };
    if (inView) {
      const end = Date.now() + duration;
      let interval: NodeJS.Timer = setInterval(function () {
        let timeLeft = end - Date.now();
        if (timeLeft <= 0) {
          return clearInterval(interval);
        }
        let particleCount = 50 * (timeLeft / duration);
        // since particles fall down, start a bit higher than random
        confetti(
          Object.assign({}, defaults, {
            particleCount,
            origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
          })
        );
        confetti(
          Object.assign({}, defaults, {
            particleCount,
            origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
          })
        );
      }, 250);
    }
  }, [inView]);

  // useEffect(() => {
  //   if (inView) spread();
  // }, [inView]);

  return (
    <div ref={ref} onClick={(e) => onClick(e)} className={styles.wrap}>
      <SingleSection brighter>
        <h2>
          GRAZIE DI CUORE
          <br />
          CI VEDIAMO AD AGOSTO 2024
        </h2>
      </SingleSection>
    </div>
  );
};

export default Index;
