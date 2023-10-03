import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Page/Home';
import Details from './Page/Detail';

const RoutesPath = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/berry/:name" element={<Details />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RoutesPath;
