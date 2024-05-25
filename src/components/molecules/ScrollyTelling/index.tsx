import React from 'react';
import * as Scrollytelling from '@bsmnt/scrollytelling';
import * as styles from './index.module.scss';
import ScrollyTellingProps from './index.types';
import Heading from '../../atoms/Heading';
import ScrollySection from '../../atoms/ScrollySection';
import YoutubeEmbed from '../../atoms/YoutubeEmbed';

const Index = ({ theme, title, year, youtubePlaylist }: ScrollyTellingProps) => {
  return (
    <div className={styles.wrap}>
      <Heading text={'Edizione ' + year} main marginTop />
      <Heading text={title} simple smaller />

      <Scrollytelling.Root scrub={false}>
        <div style={{ height: '100vh' }}>
          <ScrollySection>
            <h2>{theme}</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin faucibus, enim nec tempus posuere, magna
              elit sodales ligula, id egestas tortor nulla at magna. Vivamus at justo eget nisl dignissim convallis.
              Quisque vel risus non odio volutpat accumsan.
            </p>
          </ScrollySection>
        </div>
      </Scrollytelling.Root>

      <Scrollytelling.Root scrub={false}>
        <div style={{ height: '100vh' }}>
          <ScrollySection reverse>
            <h3>Maggiori Opportunità di Coinvolgimento</h3>
            <YoutubeEmbed src={'https://www.youtube-nocookie.com/embed/videoseries?' + youtubePlaylist} />
          </ScrollySection>
        </div>
      </Scrollytelling.Root>

      <Scrollytelling.Root scrub={false}>
        <div style={{ height: '100vh' }}>
          <ScrollySection>
            <h2>Programma Espanso di Relatori</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus euismod, nisi at sodales efficitur, magna
              sem vestibulum ex, ac efficitur lorem metus id felis. Nam aliquam, libero nec ullamcorper luctus, quam
              justo vehicula risus, eget tristique ipsum odio eu libero.
            </p>
          </ScrollySection>
        </div>
      </Scrollytelling.Root>

      <Scrollytelling.Root scrub={false}>
        <div style={{ height: '100vh' }}>
          <ScrollySection reverse>
            <Scrollytelling.Animation tween={{ start: 0, end: 1, to: { scale: 1.5, yoyo: true, repeat: -1 } }}>
              <h3>Connessione con la Natura</h3>
            </Scrollytelling.Animation>
          </ScrollySection>
        </div>
      </Scrollytelling.Root>

      <Scrollytelling.Root scrub={false}>
        <div style={{ height: '100vh' }}>
          <ScrollySection>
            <Scrollytelling.Animation tween={{ start: 0, end: 1, to: { rotate: 360 } }}>
              <h2>Un Futuro Condiviso</h2>
            </Scrollytelling.Animation>
          </ScrollySection>
        </div>
      </Scrollytelling.Root>
    </div>
  );
};

export default Index;
