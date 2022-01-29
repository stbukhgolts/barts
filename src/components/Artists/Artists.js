import React from 'react';
import { Link } from 'react-router-dom';
import { getArtists } from '../../data';
import './Artists.css'

const Artists = () => {
  let artists = getArtists();

  
  return (
  <div className='artists'>
    <h2>Список художников</h2>
    <p>Художники в алфавитном порядке. У нас есть оригинальные графические работы для продажи:</p>
    
    {artists.map(artist => (
      <Link to={`/artists/${artist.name}`} key={artist.name}>{artist.name}</Link>
    ))}
  </div>
  );
};

export default Artists;
