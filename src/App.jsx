// src/App.js
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import MyNavbar from './components/Navbar/Navbar';
import MyRoutes from './components/routing/MyRoutes';
import Footer from './components/Footer';

const App = () => {
  return (
    <Router>
      <MyNavbar />
      <MyRoutes />
      <Footer />
    </Router>
  );
};

export default App;
