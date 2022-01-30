import React from 'react';
import { Link } from 'react-router-dom';
import './WorkPreview.css';

const WorkPreview = ({ work, artist }) => {

  return (
    <div className="work-preview">
      <Link to={`/artists/${artist}/`} key={artist}>
        {artist}
      </Link>

      <Link to={`/artists/${artist}/${work.name}`} key={work.name}>
        {work.name}
      </Link>
      <img src={work.src} alt="" />
    </div>
  );
};

export default WorkPreview;
