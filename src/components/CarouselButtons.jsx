import React from 'react';
import Slider from 'react-slick';
import { Box } from '@mui/material';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import MyButton from './MyButton';
import '../App.css';

const CarouselButtons = ({ categories, handleCategoryClick, selectedCategory }) => {
  const settings = {
    infinite: false, // Infinite scrolling
    speed: 500, // Animation speed
    slidesToShow: 4, // Number of buttons to show at once
    slidesToScroll: 2, // Number of slides to scroll at once
    swipe: true,
    variableWidth: true,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <Box sx={{ mt: '50px' }}>
      <Slider {...settings}>
        {categories.map((category) => (
          <MyButton key={category} category={category} handleCategoryClick={handleCategoryClick} isSelected={selectedCategory === category} />
        ))}
      </Slider>
    </Box>
  );
};

export default CarouselButtons;
