import React from 'react';
import { getAllWorks } from '../../data';
import WorkPreview from '../WorkPreview/WorkPreview';
import img from '../../images/background.jpg'
import './HomePage.scss';

const HomePage = () => {
  let works = getAllWorks();

  return (
    <>
      <div className="about-us" style={{ backgroundImage: `url(${img})` }} >
        <h2>Искусство универсально.</h2>
        <p>
          Произведение искусства должно быть полностью задумано и сформировано
          умом перед его воплощением. Он не должен получать никаких официальных
          данных природы, чувственности или сентиментальности. Мы хотим
          исключить лиризм, драму, символику и так далее. Картина должна
          полностью состоять из чисто пластиковых элементов, а именно
          поверхностей и цветов. Изобразительный элемент не имеет никакого
          значения, кроме «самого себя»; как следствие, картина не имеет
          никакого значения, кроме «сама по себе». Конструкция картины, как и ее
          элементов, должна быть простой и визуально управляемой. Техника
          рисования должна быть механической, то есть точной,
          антиимпрессионистической. Стремление к абсолютной ясности обязательно
        </p>
      </div>

      <h2 className='home-page-works-featured'>РЕКОМЕНДУЕМАЯ КОЛЛЕКЦИЯ</h2>
      <ul className="home-page-works">
        {works.map((work) => (
          <WorkPreview work={work[0]} key={work[0].name} artist={work[1]} />
        ))}
      </ul>
    </>
  );
};

export default HomePage;
