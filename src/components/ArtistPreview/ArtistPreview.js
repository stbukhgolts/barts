import React from 'react';
import './ArtistPreview.scss'
import { Link } from 'react-router-dom';


const ArtistPreview = ({artist}) => {
  return (
  <div className='artist-preview'>
      <Link to={`/artists/${artist.name}`} key={artist.name}>
      <img src={artist.src} alt="" />
      
      {artist.name}</Link>

  </div>
  );
};

export default ArtistPreview;
