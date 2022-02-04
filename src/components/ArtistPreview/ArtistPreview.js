import React from 'react';
import './ArtistPreview.scss';
import { Link } from 'react-router-dom';

const ArtistPreview = ({ artist }) => {
  return (
    <li className="artist-preview">
      <Link to={`/artists/${artist.name}`} key={artist.name}>
        <img src={artist.src} alt="" />

        <div>
          <p>{artist.name}</p>
          <p>Check it out</p>
        </div>
      </Link>
    </li>
  );
};

export default ArtistPreview;
