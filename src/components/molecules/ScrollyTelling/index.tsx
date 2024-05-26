import React from 'react';
import * as Scrollytelling from '@bsmnt/scrollytelling';
import * as styles from './index.module.scss';
import ScrollyTellingProps from './index.types';
import Heading from '../../atoms/Heading';
import ScrollySection from '../../atoms/ScrollySection';
import YoutubeEmbed from '../../atoms/YoutubeEmbed';
import CardImage from '../../atoms/CardImage';

const Index = ({ theme, title, year, youtubePlaylist, story }: ScrollyTellingProps) => {
  return (
    <div className={styles.wrap}>
      <Heading text={'Edizione ' + year} main marginTop />
      <Heading text={title} simple smaller />
      <p>Attenzione! I seguenti testi sono inventati: questa pagina è sotto sviluppo</p>
      {story.map((s, key) => (
        <Scrollytelling.Root scrub={false} key={key}>
          <div className={styles.section}>
            <ScrollySection reverse={key % 2 == 1}>
              <h2>{s.title}</h2>
              {s.description ? <p dangerouslySetInnerHTML={{ __html: s.description }}></p> : <></>}
              {s.youtubeSrc ? <YoutubeEmbed src={s.youtubeSrc} /> : <></>}
              {s.imageSrc ? <CardImage>{s.imageSrc}</CardImage> : <></>}
            </ScrollySection>
          </div>
        </Scrollytelling.Root>
      ))}
    </div>
  );
};

export default Index;
