import React from 'react';
import { getArtists } from '../../data';
import ArtistPreview from '../ArtistPreview/ArtistPreview';
import './Artists.css'

const Artists = () => {
  let artists = getArtists();

  
  return (
  <div className='artists'>
    <h2>Список художников</h2>
    <p>У нас есть оригинальные графические работы для продажи:</p>
    
    {artists.map(artist => (
      <ArtistPreview artist={artist} key={artist.name} />
    ))}
  </div>
  );
};

export default Artists;
