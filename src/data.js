import img1 from './images/Verena Loewensberg Senza titolo.jpeg';
import img2 from './images/Max Bill Composition géométrique.jpeg';
import img3 from './images/Max Bill Composition géométrique 2.jpeg';

let artists = [
  {
    name: 'Verena Loewensberg',
    years: '(1912-1986)',
    about:
      'Верена Лёвенсберг (28 мая 1912 - 27 апреля 1986) Швейцарская художница Верена Лёвенсберг обучалась у Августа Эрбина в Академии модерна в Париже. В 1937 году она стала соучредителем «Allianz» в Цюрихе, ассоциации современных швейцарских художников, в которую также входили представители сюрреализма, позднего кубизма и конструктивизма. Лёвенсберг считается одним из ведущих представителей Concrete Art в Швейцарии («Zürcher Konkreten»), наряду с Максом Биллом, Камиллой Грезер и Рихардом Полом Лозе.',
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
    name: 'Max Bill',
    years: '(1908-1994)',
    about:
      'Макс Билл был великим швейцарским эрудитом: художником, архитектором, промышленным дизайнером, графическим дизайнером и учителем. Он посещал Баухаус, где его обучали Йозеф Альберс, Ласло Мохой-Надь, Пауль Клее, Василий Кандинский и Оскар Шлеммер. Билл по-прежнему был тесно связан со школой Баухаус и был ключевой фигурой в разработке и распространении ее принципов, особенно благодаря своей профессуре в Kunstgewerbeschule Zürich и в качестве основателя Ульмской школы дизайна. Благодаря своему стремлению к новому визуальному языку, который можно было бы понять только органами чувств, Билл определил правила швейцарского дизайна на десятилетия вперед. Его влияние распространилось даже на Южную Америку, где он стал катализатором движения конкретного искусства.',
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
    return acc.concat(cur.works.map((work) => [work, cur]));
  }, []);
}
