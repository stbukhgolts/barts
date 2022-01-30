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
        period: '1970-1979',
        year: '1974',
        technique: 'Silkscreen / Serigraph',
        signature: 'Hand signed',
        edition: '34 of 99',
        condition: 'Fair condition',
        dimensions: '70×70×0.1 cm',
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
        period: '1970-1979',
        year: '',
        technique: 'Silkscreen / Serigraph',
        signature: 'Hand signed',
        edition: '',
        condition: '',
        dimensions: '46×64×0 cm',
      },
      {
        name: 'Composition géométrique 2',
        src: img3,
        period: '1990-1999',
        year: '',
        technique: 'Silkscreen / Serigraph',
        signature: 'Plate signed',
        edition: '',
        condition: 'Excellent condition',
        dimensions: '74×70×0 cm',
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
