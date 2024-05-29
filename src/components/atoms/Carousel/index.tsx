import React from 'react';
import CarouselProps from './index.types';
import * as styles from './index.module.scss';
import Slider from 'react-slick';

const Carousel = ({
  children,
  className,
  dots = true,
  infinite = true,
  touchMove = true,
  autoplay = true,
  arrows = true,
  ...settings
}: CarouselProps) => {
  return (
    <Slider
      dots={dots}
      infinite={infinite}
      slidesToShow={1}
      slidesToScroll={1}
      touchMove={touchMove}
      autoplay={autoplay}
      autoplaySpeed={5000}
      className={className ? [className, styles.wrap] : styles.wrap}
      arrows={arrows}
      responsive={[
        {
          breakpoint: 850,
          settings: {
            dots: false,
          },
        },
        {
          breakpoint: 300,
          settings: 'unslick', // destroys slick
        },
      ]}
      {...settings}
    >
      {children}
    </Slider>
  );
};

export default Carousel;
