import React from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';
import logo from '../../../images/logo.png';

const Header = () => {
  return (
    <header className="header">
      <Link to="/">
        <img src={logo} alt="logo" />
      </Link>

      <div>
        <Link to="/">ГЛАВНАЯ</Link>
        <Link to="artists">ХУДОЖНИКИ</Link>
        <Link to="/about-us">О НАС</Link>
        
      </div>
    </header>
  );
};

export default Header;
