import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import './Main.scss';

const Main = () => {
  const location = useLocation();

  return (
    <div className='main'>
      <Header />

      <Outlet />

      {location.pathname !== '/' && (
        <Footer />
      )}
    </div>
  );
};

export default Main;
