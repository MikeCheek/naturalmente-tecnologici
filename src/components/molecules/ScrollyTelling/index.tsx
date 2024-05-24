import React from 'react';
import * as Scrollytelling from '@bsmnt/scrollytelling';
import * as styles from './index.module.scss';
import ScrollyTellingProps from './index.types';
import Heading from '../../atoms/Heading';

const Index = ({ theme, title, year }: ScrollyTellingProps) => {
  return (
    <div>
      <section className={styles.section}>
        <Heading text={'Edizione ' + year} main />
        <Heading text={title} simple smaller />
      </section>

      <section className={styles.sectionOrange}>
        <Scrollytelling.Root scrub={false}>
          <div className={styles.wrapper} style={{ height: '100vh' }}>
            <Scrollytelling.Animation tween={{ start: 0, end: 1, to: { rotate: 360 } }}>
              <h2>Continuazione del Successo</h2>
            </Scrollytelling.Animation>
          </div>
        </Scrollytelling.Root>
      </section>

      <section className={styles.section}>
        <Scrollytelling.Root scrub={false}>
          <div className={styles.wrapper} style={{ height: '100vh' }}>
            <Scrollytelling.Animation tween={{ start: 0, end: 1, to: { scale: 1.5, yoyo: true, repeat: -1 } }}>
              <h3>Maggiori Opportunità di Coinvolgimento</h3>
            </Scrollytelling.Animation>
          </div>
        </Scrollytelling.Root>
      </section>

      <section className={styles.sectionOrange}>
        <Scrollytelling.Root scrub={false}>
          <div className={styles.wrapper} style={{ height: '100vh' }}>
            <Scrollytelling.Animation tween={{ start: 0, end: 1, to: { rotate: 360 } }}>
              <h2>Programma Espanso di Relatori</h2>
            </Scrollytelling.Animation>
          </div>
        </Scrollytelling.Root>
      </section>

      <section className={styles.section}>
        <Scrollytelling.Root scrub={false}>
          <div className={styles.wrapper} style={{ height: '100vh' }}>
            <Scrollytelling.Animation tween={{ start: 0, end: 1, to: { scale: 1.5, yoyo: true, repeat: -1 } }}>
              <h3>Connessione con la Natura</h3>
            </Scrollytelling.Animation>
          </div>
        </Scrollytelling.Root>
      </section>

      <section className={styles.sectionOrange}>
        <Scrollytelling.Root scrub={false}>
          <div className={styles.wrapper} style={{ height: '100vh' }}>
            <Scrollytelling.Animation tween={{ start: 0, end: 1, to: { rotate: 360 } }}>
              <h2>Un Futuro Condiviso</h2>
            </Scrollytelling.Animation>
          </div>
        </Scrollytelling.Root>
      </section>
    </div>
  );
};

export default Index;
