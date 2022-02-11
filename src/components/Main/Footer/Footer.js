import React from 'react';
import './footer.scss';
import Social from './Social/Social';
import Subscribe from './Subscribe/Subscribe';

const Footer = () => {
  let date = new Date().getFullYear()

  return (
    <section className="footer">
      <Social />
      {/* <Subscribe /> */}

      <div className='footer__container'>
        <p>© {date}</p>
        <p>Посещение студии только после подтверждения встречи</p>
        {/* <ul>
          <li>
            <a href="/">Отправка</a> 
          </li>
          ,
          <li>
            <a href="/">Условия</a>
          </li>
            <p> и </p>
          <li>
            <a href="/"> Приватность</a>
          </li>
        </ul> */}
      </div>

    </section>
  );
};

export default Footer;
