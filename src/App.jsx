import './App.css';

import React from 'react';

import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';

// Composants
import Header from "./composants/Header";
import Navigation from './composants/Navigation';
import Footer from './composants/Footer';

// Pages
import Home from './page/Home';
import Inscription from './page/Inscription';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Navigation />      
      <Routes>       
          <Route path="/" exact element={<Home />} />
          <Route path="/inscription" element={<Inscription />} />
          <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
