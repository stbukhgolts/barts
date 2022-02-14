import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.scss';
import logo from '../../../images/logo.png';

const Header = () => {
  const location = useLocation();
  console.log(location.pathname);

  return (
    <header className={`header`}>
      {location.pathname === '/' && (
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
      )}

      <nav className={` ${location.pathname !== '/' ? 'fullwidth fixed' : ''}`}>
        <Link to="/">ГЛАВНАЯ</Link>
        <Link to="artists">ХУДОЖНИКИ</Link>
        <Link to="/about-us">О НАС</Link>
      </nav>
    </header>
  );
};

export default Header;
