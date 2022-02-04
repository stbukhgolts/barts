import React from 'react';
import { useParams } from 'react-router-dom';
import { getWorks } from '../../data';
import WorkPreview from '../WorkPreview/WorkPreview';
import './Artist.scss';

const Artist = () => {
  let params = useParams();
  let artist = getWorks(params.artist);
  let works = artist.works;

  return (
    <div className="artist">
      <div className="artist__desc">
        <h2>{params.artist}</h2>
        <p>{artist.about}</p>
      </div>

      <ul className="artist__works">
        {works.map((work) => (
          <WorkPreview work={work} key={work.name} artist={artist.name} />
        ))}
      </ul>
    </div>
  );
};

export default Artist;
