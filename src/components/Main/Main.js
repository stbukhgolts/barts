import { motion } from 'framer-motion';
import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import './Main.scss';

const Main = () => {
  const location = useLocation();

  return (
    <motion.div
      initial={{ scaleY: 0 }}
      animate={{ scaleY: 1 }}
      exit={{ scaleY: 0 }}
      transition={{ duration: 0.5}}
    >
      <div className="main">
        <Header />

        <Outlet />

        {location.pathname !== '/' && <Footer />}
      </div>
    </motion.div>
  );
};

export default Main;
