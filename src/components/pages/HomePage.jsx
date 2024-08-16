import React from 'react';
import MyCarousel from '../Carousel';
import CardSlider from '../CardSlider';
import HomeCategories from '../HomePages/HomeCategories';
import HomeFashion from '../HomePages/HomeFashion';
import HomeMakeup from '../HomePages/HomeMakeup';
import Footer from '../Footer';

const HomePage = () => {
  return (
    <>
      <MyCarousel />
      <CardSlider />
      <HomeCategories/>
      <HomeFashion />
      <HomeMakeup />
      <Footer />
    </>
  )
}

export default HomePage;