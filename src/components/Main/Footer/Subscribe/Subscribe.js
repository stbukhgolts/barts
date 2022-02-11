import React from 'react'
import Button from '../../../Button/Button'
import './subscribe.scss'

const Subscribe = () => {
  return (
    <section className='subscribe'>
      <div className='subscribe__container'>
        <h2>Подпишитесь на нашу рассылку</h2>
        <form className='subcsribe__form'>
          <p>Узнавайте первыми о новых поступлениях</p>
          
          <div className='input-container'>
            <input type='email' placeholder='Email' />
            <Button text='Подписаться'/>
          </div>
        </form>
        <p>Мы бережно относимся к вашей конфиденциальности</p>
      </div>
    </section>
  )
}

export default Subscribe
