import React from 'react';
import { getAllWorks } from '../../data';
import WorkPreview from '../WorkPreview/WorkPreview';
import logo from '../../images/logo.png';

import './HomePage.scss';

const HomePage = () => {
  let works = getAllWorks();

  return (
    <div className="home-page">
      {/* <img src={logo} alt='' /> */}

      <WorkPreview work={works[0][0]} key={works[0][0].name} artist={works[0][1]} />

      {/* <ul className="home-page-works">
        {works.map((work) => (
          <WorkPreview work={work[0]} key={work[0].name} artist={work[1]} />
        ))}
      </ul> */}
    </div>
  );
};

export default HomePage;
