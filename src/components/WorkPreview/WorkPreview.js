import React from 'react';
import { Link } from 'react-router-dom';
import './WorkPreview.scss';

const WorkPreview = ({ work, artist }) => {

  return (
    <div className="work-preview">
    
      <Link to={`/artists/${artist}/${work.name}`} key={work.name}>
      <img src={work.src} alt="" />
      
      <p>
      {artist} - {work.name}
      </p>

      

      </Link>

    </div>
  );
};

export default WorkPreview;
