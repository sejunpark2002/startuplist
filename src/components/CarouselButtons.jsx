import React from 'react';
import Slider from 'react-slick';
import { Box } from '@mui/material';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import MyButton from './MyButton';

const CarouselButtons = ({
  categories,
  handleCategoryClick,
  selectedCategory,
}) => {
  const settings = {
    infinite: false, // Infinite scrolling
    speed: 500, // Animation speed
    slidesToShow: 4, // Number of buttons to show at once
    slidesToScroll: 2, // Number of slides to scroll at once

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
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
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <Box sx={{ mt: '50px' }}>
      <Slider {...settings}>
        {categories.map((category) => (
          <Box
            key={category}
            sx={{ mx: 1, minWidth: '100%', border: '2px solid red' }}
          >
            <MyButton
              category={category}
              handleCategoryClick={handleCategoryClick}
              isSelected={selectedCategory === category}
            />
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

export default CarouselButtons;
