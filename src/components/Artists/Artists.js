import React from 'react';
import { getArtists } from '../../data';
import ArtistPreview from './ArtistPreview/ArtistPreview';
import './Artists.scss';

const Artists = () => {
  let artists = getArtists();

  return (
    <div className="artists">
      <div className="artists__heading">
        <h2>художники</h2>

        <p>У нас есть оригинальные графические работы для продажи:</p>
      </div>

      <ul className="artists-list">
        {artists.map((artist) => (
          <ArtistPreview artist={artist} key={artist.name} />
        ))}
      </ul>
    </div>
  );
};

export default Artists;
