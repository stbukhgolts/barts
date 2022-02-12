import React from 'react';
import { getArtists } from '../../data';
import ArtistPreview from '../ArtistPreview/ArtistPreview';
import './Artists.scss';

const Artists = () => {
  let artists = getArtists();

  return (
    <div className="artists">
      <h2>Список художников</h2>
      <p>У нас есть оригинальные графические работы для продажи:</p>

      <ul className="artists-list">
        {artists.map((artist) => (
          <ArtistPreview artist={artist} key={artist.name} />
        ))}
      </ul>
    </div>
  );
};

export default Artists;
