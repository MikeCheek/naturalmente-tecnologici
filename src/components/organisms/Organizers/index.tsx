import React from 'react';
import * as styles from './index.module.scss';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { StaticImage } from 'gatsby-plugin-image';
import { Carousel } from 'react-responsive-carousel';
import Heading from '../../atoms/Heading';
import PersonCard from '../../molecules/PersonCard';

const organizers = [
  { name: 'Giuseppe Becci', role: 'Organizer' },
  { name: 'Michele Pulvirenti', role: 'Developer' },
  { name: 'Giuseppe Liuzzi', role: 'Mbare' },
  { name: 'Saro Calamaro', role: 'Mbarissimo' },
];

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
            <PersonCard
              key={key}
              name={item.name}
              role={item.role}
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
