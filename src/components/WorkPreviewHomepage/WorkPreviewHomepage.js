import React from 'react';
import { Link } from 'react-router-dom';
import './WorkPreviewHomepage.scss';

const WorkPreviewHomepage = ({ work, artist }) => {

  return (
    <div className="work-preview-homepage">
        <img src={work.src} alt="" />

      <Link to={`/artists/${artist.name}/${work.name}`} key={work.name}>
        <div>
          <h2>{artist.name} </h2>
          <p className='work-preview-homepage__artist-years'>{artist.years}</p>
          <p>{work.name}</p>
        </div>
      </Link>
    </div>
  );
};

export default WorkPreviewHomepage;
