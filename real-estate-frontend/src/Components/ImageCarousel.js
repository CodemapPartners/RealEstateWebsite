import React from 'react';
import Slider from 'react-slick'; // We will use react-slick for the carousel

// Import styles for the carousel
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ImageCarousel = ({ images }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="mb-8">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index}>
            <img src={image} alt={`Property Image ${index + 1}`} className="w-full h-96 object-cover rounded-lg" />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImageCarousel;
