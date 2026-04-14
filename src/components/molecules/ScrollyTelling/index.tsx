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
import ShowOnView from '../../atoms/ShowOnView';

const Index = ({ theme, title, year, youtubePlaylist, story, data }: ScrollyTellingProps) => {
  const findImage = (name: string) =>
    data.allFile?.edges.find((e) => e.node.name === name)?.node.childImageSharp?.gatsbyImageData;

  const findVideo = (name: string) => data.allFile?.edges.find((e) => e.node.name === name)?.node.publicURL;

  const renderVideo = (name: string) => {
    const video = findVideo(name);

    return video ? <video controls playsInline loop muted src={video} /> : <></>;
  };

  return (
    <div className={styles.wrap}>
      <Heading text={'Edizione ' + year} main marginTop />
      <Heading text={title} simple smaller />
      {story.map((s, key) => (
        <Scrollytelling.Root scrub={false} key={key}>
          <div className={styles.section}>
            <ScrollySection reverse={key % 2 == 1}>
              <Heading text={s.title} smaller />
              {s.description ? (
                <ShowOnView>
                  <p dangerouslySetInnerHTML={{ __html: s.description }}></p>
                </ShowOnView>
              ) : (
                <></>
              )}
              {s.youtubeSrc ? <YoutubeEmbed src={s.youtubeSrc} /> : <></>}
              {s.videoName ? (
                s.videoName instanceof Array ? (
                  <Carousel className={styles.slider}>
                    {s.videoName
                      .map((v) => ({ name: v, video: findVideo(v) }))
                      .filter((v) => !!v.video)
                      .map((v, key) => (
                        <CardImage key={key} bigger>
                          <video controls playsInline loop muted src={v.video} />
                        </CardImage>
                      ))}
                  </Carousel>
                ) : (
                  <CardImage bigger>{renderVideo(s.videoName)}</CardImage>
                )
              ) : (
                <></>
              )}
              {s.imageName ? (
                s.imageName instanceof Array ? (
                  <Carousel className={styles.slider}>
                    {s.imageName
                      .map((v) => ({ name: v, image: findImage(v) }))
                      .filter((v) => !!v.image)
                      .map((v, key) => (
                        <GatsbyImage key={key} className={styles.image} alt={v.name} image={v.image!} />
                      ))}
                  </Carousel>
                ) : (
                  <CardImage>
                    {findImage(s.imageName) ? <GatsbyImage alt={s.imageName} image={findImage(s.imageName)!} /> : <></>}
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
