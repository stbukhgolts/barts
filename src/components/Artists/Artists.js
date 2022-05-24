import React from 'react';
import { getArtists } from '../../data';
import ArtistPreview from './ArtistPreview/ArtistPreview';
import './Artists.scss';
import { motion } from 'framer-motion';

const Artists = () => {
  let artists = getArtists();

  return (
    <motion.div
      initial={{ scaleY: 0 }}
      animate={{ scaleY: 1 }}
      exit={{ scaleY: 0 }}
      transition={{ duration: 0.5}}

    >
      <div className="artists">
        <div className="artists__heading">
          <h2>художники</h2>

          <p>
            У нас есть оригинальные графические работы следующих художников для
            продажи:
          </p>
        </div>

        <ul className="artists-list">
          {artists.map((artist) => (
            <ArtistPreview artist={artist} key={artist.name} />
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

export default Artists;
