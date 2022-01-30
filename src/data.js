import img1 from './images/Verena Loewensberg Senza titolo.jpeg'
import img2 from './images/Max Bill Composition géométrique.jpeg'
import img3 from './images/Max Bill Composition géométrique 2.jpeg'

let artists = [
  {
    name: 'Verena Loewensberg (1912-1986)',
    src: img1,
    works: [
      {
        name: 'Senza titolo',
        src: img1,
      },
    ],
  },
  {
    name: 'Max Bill (1908-1994)',
    src: img2,
    works: [
      {
        name: 'Composition géométrique',
        src: img2,
      },
      {
        name: 'Composition géométrique',
        src: img3,
      },
    ],
  },
];

export function getArtists() {
  return artists;
}

export function getWorks(artistName) {
  let artist = artists.filter((artist) => artist.name === artistName)[0];
  return artist;
}

export function getAllWorks() {
  return artists.reduce((acc, cur) => {
    return acc.concat(cur.works.map(work => [work, cur.name]));
  }, []);
}
