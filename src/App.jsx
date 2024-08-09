// src/App.js
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import MyNavbar from './components/Navbar/Navbar';
import MyRoutes from './components/routing/MyRoutes';

const App = () => {
  return (
    <Router>
      <MyNavbar />
      <MyRoutes />
    </Router>
  );
};

export default App;
