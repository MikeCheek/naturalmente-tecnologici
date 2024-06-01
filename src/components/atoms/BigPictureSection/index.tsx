import React from 'react';
import { BigPictureSectionProps } from './index.types';
import * as styles from './index.module.scss';
import ShowOnView from '../ShowOnView';
import { GatsbyImage } from 'gatsby-plugin-image';
import Carousel from '../Carousel';
import Player from 'react-player/lazy';

const Index = ({ title, text, reverse = false, images, videos }: BigPictureSectionProps) => {
  const slides = [
    videos?.map((v, key) => (
      <Player
        key={key}
        url={v}
        className={styles.video}
        height={500}
        muted
        autoPlay
        playing
        controls={false}
        loop
        playsInline
        config={{ file: { forceVideo: true } }}
      />
    )),
    images?.edges.map((e, index) => (
      <GatsbyImage
        key={index}
        alt={e.node.name ?? ''}
        image={e.node.childImageSharp.gatsbyImageData}
        loading="lazy"
        className={styles.image}
        objectPosition={'center bottom'}
      />
    )),
  ]
    .filter((e) => e != undefined)
    .flat();

  return (
    <div className={styles.wrap}>
      <ShowOnView className={reverse ? styles.wrapTextReverse : styles.wrapText}>
        <h3 dangerouslySetInnerHTML={{ __html: title }}></h3>
        <p dangerouslySetInnerHTML={{ __html: text ?? '' }}></p>
      </ShowOnView>

      <div className={reverse ? styles.bigImageReverse : styles.bigImage}>
        <span></span>
        {/* <div
          style={{
            transform: transform,
            WebkitTransform: transform,
          }}
          className={reverse ? styles.scrollingImagesReverse : styles.scrollingImages}
        > */}
        <Carousel>{slides}</Carousel>
        {/* </div> */}
      </div>
    </div>
  );
};

export default Index;
