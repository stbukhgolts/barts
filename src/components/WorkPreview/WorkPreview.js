import React from 'react';
import { Link, useParams } from 'react-router-dom';
import './WorkPreview.css'

const WorkPreview = ({work}) => {
  let params = useParams();

  return (
    <div className="work-preview">
      <Link to={`/artists/${params.artist}/${work.name}`} key={work.name}>
        {work.name}
      </Link>
      <img src={work.src} alt=''/>
    </div>
  );
};

export default WorkPreview;
