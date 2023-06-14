import React from 'react';
import Slider from 'react-slick';
import * as styles from './index.module.scss';
import { GatsbyImage } from 'gatsby-plugin-image';
import { info, images } from '../../../utilities/heardOn';
import { useInView } from 'react-intersection-observer';

const Index = () => {
  const data = images();
  const [ref, inView, _entry] = useInView({
    threshold: 0,
    rootMargin: '10% 0px -20% 0px',
    fallbackInView: true,
    triggerOnce: true,
  });

  return (
    <div
      ref={ref}
      className={styles.wrapper}
      style={{ transform: inView ? 'none' : 'translateX(50%)', opacity: inView ? 1 : 0 }}
    >
      <h2>CI HAI VISTO SU</h2>
      <Slider
        dots={false}
        arrows={false}
        draggable
        infinite
        slidesToShow={4}
        slidesToScroll={1}
        autoplay
        speed={3000}
        autoplaySpeed={3000}
        cssEase="linear"
        pauseOnHover
        swipeToSlide
        touchMove
        waitForAnimate={false}
        responsive={[
          {
            breakpoint: 1700,
            settings: {
              slidesToShow: 4,
            },
          },
          {
            breakpoint: 1300,
            settings: {
              slidesToShow: 3,
            },
          },
          {
            breakpoint: 850,
            settings: {
              slidesToShow: 2,
              speed: 2500,
              autoplaySpeed: 2500,
            },
          },
          {
            breakpoint: 300,
            settings: 'unslick', // destroys slick
          },
        ]}
      >
        {info.map((elem, key) => (
          <div className={styles.slide} key={key}>
            <span>
              {elem.image ? (
                data.allFile ? (
                  <GatsbyImage
                    alt={elem.name}
                    loading="lazy"
                    objectFit="contain"
                    image={
                      data.allFile.edges.find((value) => value.node.name == elem.image)?.node.childImageSharp
                        .gatsbyImageData
                    }
                    className={styles.image}
                  />
                ) : (
                  <></>
                )
              ) : elem.svg ? (
                <elem.svg width={170} className={styles.image} />
              ) : (
                <></>
              )}
              {elem.showName ? <span>{elem.name}</span> : <></>}
            </span>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Index;
