import React from 'react';
import { useParams } from 'react-router-dom';
import { getWorks } from '../../data';
import WorkPreview from '../WorkPreview/WorkPreview';
import './Artist.css';

const Artist = () => {
  let params = useParams();
  let artist = getWorks(params.artist)
  let works = artist.works;
  
  return (
    <>
      <div>{params.artist}</div>

      {
        works.map(work => (
          <WorkPreview work={work} key={work.name} />
          )
        )
      }

    </>
  );
};

export default Artist;

