import React from 'react';
import { Link } from 'react-router-dom';
import './WorkPreview.scss';

const WorkPreview = ({ work, artist }) => {

  return (
    <li className="work-preview">
    
      <Link to={`/artists/${artist}/${work.name}`} key={work.name}>
      <img src={work.src} alt="" />
      {artist} - {work.name}

      </Link>

    </li>
  );
};

export default WorkPreview;
