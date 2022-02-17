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
      <div className="artist__hero">
        <img src={works[0].src} alt="" />
        <div className="artist__name-container">
          <h2>{params.artist}</h2>
          <p>{artist.years}</p>
        </div>
      </div>

      <div className="artist__desc">
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
