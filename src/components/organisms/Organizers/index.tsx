import 'react-responsive-carousel/lib/styles/carousel.min.css';
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import * as styles from './index.module.scss';
import Heading from '../../atoms/Heading';
import CardPerson from '../../molecules/CardPerson';
import { organizers } from '../../../hooks/useInfo';
import { GatsbyImage } from 'gatsby-plugin-image';
import useOrganizers from '../../../hooks/useOrganizers';

const Index = () => {
  const data = useOrganizers();

  return (
    <div className={styles.wrap}>
      <Heading text="Comitato organizzativo" />
      <Carousel
        className={styles.carousel}
        interval={5000}
        ariaLabel={'Organizzatori'}
        autoPlay
        showArrows
        showThumbs={false}
        showIndicators
        emulateTouch
        showStatus={false}
        infiniteLoop
        preventMovementUntilSwipeScrollTolerance
        stopOnHover
        useKeyboardArrows
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
      </Carousel>
    </div>
  );
};

export default Index;
