import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import NewPage from '../pages/NewPage';
import AboutPage from '../pages/AboutPage';
import ContactPage from '../pages/ContactPage';
import Cart from '../Cart';

const MyRoutes = () => {
    return (
        <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route path="/new" element={<NewPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/products/kitchen" element={<p>Kitchen products</p>} />
            <Route path="/products/HomeAccessories" element={<p>Home products</p>} />
            <Route path="/products/accessories" element={<p>accessories products</p>} />
            <Route path="/products/menFashion" element={<p>men Fashion</p>} />
            <Route path="/products/womenFashion" element={<p>women Fashion</p>} />
            <Route path='/products/makeup' element={<p>Makeup page</p>} />
        </Routes>
    );
};
export default MyRoutes;