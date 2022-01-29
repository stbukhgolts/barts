import React from 'react';
import './NotFound.css';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div>
      <p>There's nothing there!</p>
      <Link to="/">Home</Link>
    </div>
  );
};

export default NotFound;
