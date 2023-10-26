import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Page/Home';
import Details from './Page/Detail';
import Page404 from './Page/Page404';

const RoutesPath = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pokemon/:id" element={<Details />} />
        <Route path='*' element={<Page404 />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RoutesPath;
