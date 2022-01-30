import React from 'react';
import { getAllWorks } from '../../data';
import WorkPreview from '../WorkPreview/WorkPreview';
import './HomePage.css';

const HomePage = () => {
  let works = getAllWorks();

  return (
    <>
      <div>About Us</div>

      {works.map((work) => (
        <WorkPreview work={work[0]} key={work[0].name} artist={work[1]}/>
      ))}
    </>
  );
};

export default HomePage;
