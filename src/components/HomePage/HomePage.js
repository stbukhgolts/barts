import React from 'react';
import { getAllWorks } from '../../data';
import WorkPreview from '../WorkPreview/WorkPreview';

import './HomePage.scss';

const HomePage = () => {
  let works = getAllWorks();

  return (
    <div className="home-page">
      <h2 className="home-page-works-featured">РЕКОМЕНДУЕМАЯ КОЛЛЕКЦИЯ</h2>
      <ul className="home-page-works">
        {works.map((work) => (
          <WorkPreview work={work[0]} key={work[0].name} artist={work[1]} />
        ))}
      </ul>
    </div>
  );
};

export default HomePage;
