import React from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import './Header.scss';
import logo from '../../../images/logo.png';

const Header = () => {
  const location = useLocation();

  return (
    <header className='header'>
      {location.pathname === '/' && (
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
      )}

      <nav className={` ${location.pathname !== '/' ? 'fullwidth fixed' : ''}`}>
        <NavLink to="/">ГЛАВНАЯ</NavLink>
        <NavLink to="artists">ХУДОЖНИКИ</NavLink>
        <NavLink to="/about-us">О НАС</NavLink>
      </nav>
    </header>
  );
};

export default Header;
