import React, { useState, useRef, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import ExampleComponent from './components/ExampleComponent';
import HeaderInfo from './components/HeaderInfo';
import TopArea from './components/TopArea';
import Main from './components/Main';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Footer from './components/Footer';
import Store from './components/Store';
import Products from './components/Products';

const App = () => {

  return (
    <Router>
      <HeaderInfo />
      <TopArea />
      <Routes>
        <Route path="/" element={<Main/>} />
        <Route path="/example" element={<ExampleComponent />} />
        <Route path='/store' element={<Store />} />
        <Route path='/products' element={<Products />} />
      </Routes>
      <Footer/>
    </Router>
  );
};

export default App;
