import React from 'react';
import Slider from 'react-slick';
import * as styles from './index.module.scss';
import { GatsbyImage } from 'gatsby-plugin-image';
import AgenziaGiovani from '../../../assets/heardOn/agenziagiovani.svg';
import useHeardOnImages from '../../../hooks/useHeardOnImages';

const info = [
  {
    name: 'AGENZIA DI STAMPA GIOVANILE',

    image: 'stampagiovanile',
  },
  {
    name: 'RomaReport',

    image: 'romareport',
  },
  {
    name: 'AGENZIA NAZIONALE GIOVANI',

    svg: AgenziaGiovani,
  },
  {
    name: 'Basilicata 24',

    image: 'basilicata24',
  },
  {
    name: 'Sassi live',

    image: 'sassilive',
  },
  // {
  //   name: 'Basilicata a colori',
  //
  // },
  // { name: 'Tecnica della scuola' },
  // { name: 'TRM Network' },
  // { name: 'TGR' },
  // { name: 'VITA' },
  // { name: 'WIRED' },
  // { name: 'TEDx' },
];

const Index = () => {
  const images = useHeardOnImages();

  return (
    <div className={styles.wrapper}>
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
                images.allFile ? (
                  <GatsbyImage
                    alt={elem.name}
                    loading="lazy"
                    image={
                      images.allFile.edges.find((value) => value.node.name == elem.image)?.node.childImageSharp
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
              <span>{elem.name}</span>
            </span>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Index;
