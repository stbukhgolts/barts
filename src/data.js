import img1 from './images/WhatsApp Image 2022-01-04 at 14.02.14 (1).jpeg'
import img2 from './images/WhatsApp Image 2022-01-04 at 14.02.14.jpeg'
import img3 from './images/WhatsApp Image 2022-01-04 at 14.02.15 (1).jpeg'

let artists = [
  {
    name: 'Warhol',
    works: [
      {
        name: 'soup',
        src: img1,
      },
      {
        name: 'portrait',
        src: img2,
      },
    ],
  },
  {
    name: 'Malevich',
    works: [
      {
        name: 'red square',
        src: '',
      },
      {
        name: 'black square',
        src: '',
      },
    ],
  },
  {
    name: 'Rubens',
    works: [
      {
        name: 'girl',
        src: '',
      },
      {
        name: 'another girl',
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
    return acc.concat(cur.works);
  }, []);
}
