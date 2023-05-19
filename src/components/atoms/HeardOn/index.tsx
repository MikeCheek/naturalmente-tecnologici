import React from 'react';
import Slider from 'react-slick';
import * as styles from './index.module.scss';
import { GatsbyImage } from 'gatsby-plugin-image';
import AgenziaGiovani from '../../../assets/heardOn/agenziagiovani.svg';
import useHeardOnImages from '../../../hooks/useHeardOnImages';

const info = [
  {
    name: 'AGENZIA DI STAMPA GIOVANILE',
    link: 'http://www.stampagiovanile.it/gioventu/syskrak-giovani-oltre-gli-schemi/',
    image: 'stampagiovanile',
  },
  {
    name: 'RomaReport',
    link: 'https://www.romareport.it/2023/01/09/storie-di-giovani-che-provano-a-cambiare-il-mondo-in-piccolo-e-in-grande/',
    image: 'romareport',
  },
  {
    name: 'AGENZIA NAZIONALE GIOVANI',
    link: 'https://agenziagiovani.it/stampa-e-media/comunicati-stampa-ang-press/agenzia-nazionale-giovani-e-ashoka-italia-selezionati-i-50-changemaker-di-genc/',
    svg: AgenziaGiovani,
  },
  {
    name: 'Basilicata 24',
    link: 'https://www.basilicata24.it/2022/08/a-grassano-la-tre-giorni-su-nuove-tecnologie-e-sviluppo-sostenibile-116236/',
    image: 'basilicata24',
  },
  {
    name: 'Sassi live',
    link: 'https://www.sassilive.it/cultura-e-spettacoli/terza-pagina/il-futuro-ha-un-cuore-antico-syskrack-presenta-naturalmente-tecnologici-a-grassano/',
    image: 'sassilive',
  },
  // {
  //   name: 'Basilicata a colori',
  //   link: 'https://basilicataacolori.wordpress.com/2022/08/01/arriva-in-basilicata-naturalmente-tecnologici-la-tre-giorni-su-nuove-tecnologie-e-sviluppo-sostenibile-grassano-11-13-agosto-2022/',
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
      <h2>VISTO SU</h2>
      <Slider
        dots={false}
        arrows={false}
        infinite
        slidesToShow={4}
        slidesToScroll={1}
        autoplay
        speed={5000}
        autoplaySpeed={5000}
        cssEase="linear"
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
            <a href={elem.link}>
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
            </a>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Index;
