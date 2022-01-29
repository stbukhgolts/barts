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
        <WorkPreview work={work} key={work.name} />
      ))}
    </>
  );
};

export default HomePage;
