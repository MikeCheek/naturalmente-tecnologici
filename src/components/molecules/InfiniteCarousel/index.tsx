import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Index = () => {
  return (
    <Slider
      dots={true}
      infinite={true}
      slidesToShow={3}
      slidesToScroll={1}
      autoplay={true}
      speed={2000}
      autoplaySpeed={2000}
      cssEase="linear"
    >
      <div>
        <img src="http://recruiters-zone.com/static/media/BRS_Ventures.0722bfe22318cd3f3f5d.jpg" />
      </div>
      <div>
        <img src="http://recruiters-zone.com/static/media/ibexglobal.bbde01ca0d4903ed36b1.png" />
      </div>
      <div>
        <img src="http://recruiters-zone.com/static/media/BRS_Ventures.0722bfe22318cd3f3f5d.jpg" />
      </div>
      <div>
        <img src="http://recruiters-zone.com/static/media/BRS_Ventures.0722bfe22318cd3f3f5d.jpg" />
      </div>
      <div>
        <img src="http://recruiters-zone.com/static/media/ibexglobal.bbde01ca0d4903ed36b1.png" />
      </div>
      <div>
        <img src="http://recruiters-zone.com/static/media/BRS_Ventures.0722bfe22318cd3f3f5d.jpg" />
      </div>
    </Slider>
  );
};

export default Index;
