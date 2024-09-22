import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import NewPage from '../pages/NewPage';
import AboutPage from '../pages/AboutPage';
import ContactPage from '../pages/ContactPage';
import Cart from '../Cart';
import Accesories from '../ProductPages/Accessories';
import HomeAccessories from '../ProductPages/HomeAccessories';
import Kitchen from '../ProductPages/Kitchen';
import Makeup from '../ProductPages/Makeup';
import MenFashion from '../ProductPages/MenFashion';
import WomenFashion from '../ProductPages/WomenFashion';
import AdminPage from '../Admin/AdminPage';


const MyRoutes = () => {
    return (
        <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route path="/new" element={<NewPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/products/kitchen" element={<Kitchen />} />
            <Route path="/products/HomeAccessories" element={<HomeAccessories />} />
            <Route path="/products/accessories" element={<Accesories />} />
            <Route path="/products/menFashion" element={< MenFashion/>} />
            <Route path="/products/womenFashion" element={<WomenFashion />} />
            <Route path='/products/makeup' element={<Makeup />} />
            <Route path='/admin' element={<AdminPage />} />
        </Routes>
    );
};
export default MyRoutes;