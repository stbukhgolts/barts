import React from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';

const Header = () => {
  return (
    <header className='header'>
      <Link to='/'>Home</Link>
      <Link to="artists">Artists</Link>
    </header>
  );
};

export default Header;
