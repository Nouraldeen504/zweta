import React from 'react';
import MyCarousel from '../Carousel';
import CardSlider from '../CardSlider';
import HomeCategories from '../HomePages/HomeCategories';
import HomeFashion from '../HomePages/HomeFashion';
import HomeMakeup from '../HomePages/HomeMakeup';

const HomePage = () => {
  return (
    <>
      <MyCarousel />
      <CardSlider />
      <HomeCategories/>
      <HomeFashion />
      <HomeMakeup />
    </>
  )
}

export default HomePage;