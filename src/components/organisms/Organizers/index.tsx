import React from 'react';
import * as styles from './index.module.scss';
import Heading from '../../atoms/Heading';
import CardPerson from '../../molecules/CardPerson';
import { organizers } from '../../../hooks/useInfo';
import { GatsbyImage } from 'gatsby-plugin-image';
import useOrganizers from '../../../hooks/useOrganizers';
import Slider from 'react-slick';

const Index = () => {
  const data = useOrganizers();

  return (
    <div className={styles.wrap}>
      <Heading text="Comitato organizzativo" />
      <div className={styles.carousel}>
        <Slider
          dots={false}
          infinite
          slidesToShow={4}
          slidesToScroll={1}
          autoplay
          autoplaySpeed={5000}
          pauseOnHover
          responsive={[
            {
              breakpoint: 2000,
              settings: {
                slidesToShow: 4,
              },
            },
            {
              breakpoint: 1700,
              settings: {
                slidesToShow: 3,
              },
            },
            {
              breakpoint: 1300,
              settings: {
                slidesToShow: 2,
              },
            },
            {
              breakpoint: 850,
              settings: {
                slidesToShow: 1,
                dots: false,
              },
            },
            {
              breakpoint: 300,
              settings: 'unslick', // destroys slick
            },
          ]}
        >
          {organizers.map((item, key) => {
            return (
              <CardPerson
                key={key}
                name={item.name}
                role={item.role}
                website={item.website}
                linkedin={item.linkedin}
                image={
                  <GatsbyImage
                    alt={item.name}
                    image={data.allFile!.edges[item.image ?? 0].node.childImageSharp.gatsbyImageData}
                    loading="lazy"
                    className={styles.image}
                    objectPosition={'center top'}
                  />
                }
                reversed={key % 2 == 0 ? true : false}
              />
            );
          })}
        </Slider>
      </div>
    </div>
  );
};

export default Index;
