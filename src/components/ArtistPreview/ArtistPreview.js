import React from 'react';
import './ArtistPreview.css'
import { Link } from 'react-router-dom';


const ArtistPreview = ({artist}) => {
  return (
  <div className='artist-preview'>
      <img src={artist.src} alt="" />
      <Link to={`/artists/${artist.name}`} key={artist.name}>{artist.name}</Link>

  </div>
  );
};

export default ArtistPreview;
