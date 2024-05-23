import React from 'react';
import * as Scrollytelling from '@bsmnt/scrollytelling';
import * as styles from './index.module.scss';
import ScrollyTellingProps from './index.types';

const Index = ({ theme, title, year }: ScrollyTellingProps) => {
  return (
    <main>
      <section className={styles.section}>
        <div className={styles.wrapper}>
          <h1>Edizione {year}</h1>
        </div>
      </section>

      <section className={styles.sectionOrange}>
        <Scrollytelling.Root
          scrub={false}
          callbacks={{
            onEnterBack: (st) => {
              st.animation?.seek(0).play();
            },
          }}
        >
          <div
            className={styles.wrapper}
            style={{
              height: '100vh',
            }}
          >
            <Scrollytelling.Animation tween={{ start: 0, end: 1, to: { rotate: 360 } }}>
              <h2>{title}</h2>
            </Scrollytelling.Animation>
          </div>
        </Scrollytelling.Root>
      </section>

      <section className={styles.section}>
        <Scrollytelling.Root scrub={false}>
          <div
            className={styles.wrapper}
            style={{
              height: '100vh',
            }}
          >
            <Scrollytelling.Animation
              tween={{
                start: 0,
                end: 1,
                to: { scale: 1.5, yoyo: true, repeat: -1 },
              }}
            >
              <h3>{theme}</h3>
            </Scrollytelling.Animation>
          </div>
        </Scrollytelling.Root>
      </section>
    </main>
  );
};

export default Index;
