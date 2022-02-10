import React from 'react';
import { getAllWorks } from '../../data';
import WorkPreview from '../WorkPreview/WorkPreview';
import img from '../../images/background.jpg';
import './HomePage.scss';

const HomePage = () => {
  let works = getAllWorks();

  return (
    <>
      <div className="about-us" style={{ backgroundImage: `url(${img})` }}>
        <p>
          Галерея ОРГАНИССИМО была основана как онлайн-магазин произведений
          искусства в 2020 году. Мы сосредоточены на конкретном, конструктивном
          и концептуальном искусстве, геометрической абстракции и кинетическом
          искусстве, периоде охватывающем авангардные позиции с 1920-х годов до
          наших дней. ORGANISSIMO представляет подборку оригинальных литографий,
          шелкографий, лимитированных тираже, NFT и уникальных работ европейских
          художников в сотрудничестве с известными издательствами. Работы таких
          художников, как Лайош Кашшак, Виктор Вазарели, Лу Лебер, Лотар Шрайер,
          Вальтер Дексель, Гюнтер Фрухтранк, Йо Нимейер, Ларс-Гуннар Нордстрем,
          Матти Куясало, Петер Фогель, Вальтер Гирс, Макс Билл, Пауль Клее,
          Верена Лёвенсберг, Иосиф (Джозеф) Альберс и многие другие.
        </p>
      </div>

      <h2 className="home-page-works-featured">РЕКОМЕНДУЕМАЯ КОЛЛЕКЦИЯ</h2>
      <ul className="home-page-works">
        {works.map((work) => (
          <WorkPreview work={work[0]} key={work[0].name} artist={work[1]} />
        ))}
      </ul>
    </>
  );
};

export default HomePage;
