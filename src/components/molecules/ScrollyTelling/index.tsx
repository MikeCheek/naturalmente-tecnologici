import React from 'react';
import * as Scrollytelling from '@bsmnt/scrollytelling';
import * as styles from './index.module.scss';
import ScrollyTellingProps from './index.types';
import Heading from '../../atoms/Heading';
import ScrollySection from '../../atoms/ScrollySection';
import YoutubeEmbed from '../../atoms/YoutubeEmbed';
import CardImage from '../../atoms/CardImage';
import { GatsbyImage } from 'gatsby-plugin-image';
import Carousel from '../../atoms/Carousel';

const Index = ({ theme, title, year, youtubePlaylist, story, data }: ScrollyTellingProps) => {
  const findImage = (name: string) =>
    data.allFile!.edges.find((e) => e.node.name === name)?.node.childImageSharp.gatsbyImageData;

  return (
    <div className={styles.wrap}>
      <Heading text={'Edizione ' + year} main marginTop />
      <Heading text={title} simple smaller />
      <p>Attenzione! I seguenti testi sono inventati: questa pagina è sotto sviluppo</p>
      {story.map((s, key) => (
        <Scrollytelling.Root scrub={false} key={key}>
          <div className={styles.section}>
            <ScrollySection reverse={key % 2 == 1}>
              <Heading text={s.title} smaller />
              {s.description ? <p dangerouslySetInnerHTML={{ __html: s.description }}></p> : <></>}
              {s.youtubeSrc ? <YoutubeEmbed src={s.youtubeSrc} /> : <></>}
              {s.imageName ? (
                s.imageName instanceof Array ? (
                  <Carousel className={styles.slider}>
                    {s.imageName.map((v, key) => (
                      <GatsbyImage key={key} className={styles.image} alt={v} image={findImage(v)} />
                    ))}
                  </Carousel>
                ) : (
                  <CardImage>
                    <GatsbyImage alt={s.imageName} image={findImage(s.imageName)} />
                  </CardImage>
                )
              ) : (
                <></>
              )}
            </ScrollySection>
          </div>
        </Scrollytelling.Root>
      ))}
    </div>
  );
};

export default Index;
