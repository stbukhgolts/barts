import React from 'react';
import { useParams } from 'react-router-dom';
import { getWorks } from '../../data';
import './Work.css'

const Work = () => {
  let params = useParams();
  let artist = getWorks(params.artist);
  let work = artist.works.filter((work) => work.name === params.work)[0];

  return (
    <div className='work'>
      <div>{params.work}</div>
      <img src={work.src} alt="" />
    </div>
  );
};

export default Work;
