import React from 'react';
import { useParams } from 'react-router-dom';
import { getWorks } from '../../data';
import WorkPreview from '../WorkPreview/WorkPreview';
import './Artist.css';

const Artist = () => {
  let params = useParams();
  let artist = getWorks(params.artist);
  let works = artist.works;

  return (
    <>
      <h2>{params.artist}</h2>
      <p>{artist.about}</p>

      <ul>
        {works.map((work) => (
          <WorkPreview work={work} key={work.name} artist={artist.name} />
        ))}
      </ul>
    </>
  );
};

export default Artist;
