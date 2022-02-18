import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { getWorks } from '../../data';
import './Work.scss';

const Work = () => {
  let params = useParams();
  let artist = getWorks(params.artist);
  let work = artist.works.filter((work) => work.name === params.work)[0];

  console.log(artist.name);
  return (
    <div className="work">
      <img src={work.src} alt="" />

      <div className="work__desc">
        <ul>
          <li>
            {work.name} -
            <Link to={`/artists/${artist.name}`}> {artist.name} </Link>
          </li>
          <li>Время написания: {work.period}</li>
          <li>Техника: {work.technique}</li>
          <li>Подпись: {work.signature}</li>
          <li>Выпуск: {work.edition}</li>
          <li>Состояние: {work.condition}</li>
          <li>Размеры: {work.dimensions}</li>
          <li>Цена: {work.price}</li>
        </ul>

        <Link to={`/artists/${artist.name}`}>Обратно к {artist.name} </Link>
      </div>
    </div>
  );
};

export default Work;
