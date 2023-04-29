import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import { StaticImage } from 'gatsby-plugin-image';
import * as styles from './index.module.scss';
import Heading from '../../atoms/Heading';
import CardPerson from '../../molecules/CardPerson';
import { organizers } from '../../../hooks/useInfo';

const Index = () => {
  const image = (
    <StaticImage
      src="../../../images/crew/becci.jpg"
      width={200}
      height={250}
      alt="Giuseppe Becci"
      layout="constrained"
    />
  );
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
              image={image}
              reversed={key % 2 == 0 ? true : false}
            />
          );
        })}
      </Carousel>
    </div>
  );
};

export default Index;
