import React, { useEffect, useState } from 'react';
import { BigPictureSectionProps } from './index.types';
import * as styles from './index.module.scss';
import ShowOnView from '../ShowOnView';
import { useInView } from 'react-intersection-observer';
import { GatsbyImage } from 'gatsby-plugin-image';

const Index = ({ title, text, reverse = false, images }: BigPictureSectionProps) => {
  let base = 0;
  const [offset, setOffset] = useState<number>(0);

  const [ref, inView, entry] = useInView({
    threshold: 0.2,
    fallbackInView: true,
    triggerOnce: false,
  });

  const parallax = () => {
    const rect = entry!.target.getBoundingClientRect();
    const a = rect.top + rect.bottom;
    setOffset((a / window.innerHeight) * 100);
  };

  useEffect(() => {
    if (inView) {
      base = window.scrollY;
      window.addEventListener('scroll', () => parallax());
    } else window.removeEventListener('scroll', () => {});

    return window.removeEventListener('scroll', () => {});
  }, [inView]);

  const transform = `translateX(${reverse ? '-' : '+'}${Math.round(offset / 2)}%)`;

  return (
    <div className={styles.wrap}>
      <ShowOnView className={reverse ? styles.wrapTextReverse : styles.wrapText}>
        <h4 dangerouslySetInnerHTML={{ __html: title }}></h4>
        <p dangerouslySetInnerHTML={{ __html: text ?? '' }}></p>
      </ShowOnView>

      <div ref={ref} className={reverse ? styles.bigImageReverse : styles.bigImage}>
        <span></span>
        <div
          style={{
            transform: transform,
            WebkitTransform: transform,
          }}
          className={reverse ? styles.scrollingImagesReverse : styles.scrollingImages}
        >
          {images.edges.map((e, index) => (
            <GatsbyImage
              key={index}
              alt={e.node.name ?? ''}
              image={e.node.childImageSharp.gatsbyImageData}
              loading="lazy"
              className={styles.image}
              objectPosition={'center top'}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Index;
