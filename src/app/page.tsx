'use client'
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import MenuPage from '../pages/MenuPage';
import LocationsPage from '../pages/LocationsPage';
import ContactPage from '../pages/ContactPage';
import NavigationBar from '../components/NavigationBar';

const App = () => {
  return (
    <Router>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/menu" element={<MenuPage/>} />
        <Route path="/locations" element={<LocationsPage/>} />
        <Route path="/contact" element={<ContactPage/>} />
      </Routes>
    </Router>
  );
}

export default App;