import React from 'react';
import SocialLinks from '../../../SocialLinks/SocialLinks';
import './social.scss';
import img from '../../../../images/12.svg';


const Social = () => {
  return (
    <div className='social'>
      <div className="social__container">
        <img src={img} alt="logo" />
        <h2>Наши соцсети</h2>
        <ul>
          <li>
            <a href="/">Facebook</a>
          </li>
          <p> & </p>
          <li>
            <a href="/">Instagram</a>
          </li>
        </ul>
        <SocialLinks />
      </div>
    </div>
  );
};

export default Social;
