import React from 'react';
import './button.css'

const Button = ({text}) => {
  return (
    <button type="button" className='button'>
      <a href="./">{text}</a>
    </button>
  );
};

export default Button;
