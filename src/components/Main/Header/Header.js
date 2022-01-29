import React from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';

const Header = () => {
  return (
    <div className='header'>
      <Link to='/'>Home</Link>
      <Link to="artists">Artists</Link>
    </div>
  );
};

export default Header;
