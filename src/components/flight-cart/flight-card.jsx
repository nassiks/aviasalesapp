import React from 'react'

import styles from './flight-card.module.scss'

const FlightCard = () => {
  return (
    <div className={styles['flight-card']}>
      <div className={styles['flight-card__header']}>
        <div className={styles['flight-card__price']}>13 400Р</div>
        <div className={styles['flight-card__logo']}>
          <img src="../../assets/img/S7-logo.png" alt="logo airlines" />
        </div>
      </div>
      <div className={styles['flight-card__body']}>
        <div className={styles['flight-card__body-rote']}>
          <p className={styles['flight-card__label']}>MOW – HKT</p>
          <p className={styles['flight-card__text']}>10:45 – 08:00</p>
        </div>
        <div className={styles['flight-card__body-length']}>
          <p className={styles['flight-card__label']}>В пути</p>
          <p className={styles['flight-card__text']}>21ч 15м</p>
        </div>
        <div className={styles['flight-card__body-stops']}>
          <p className={styles['flight-card__label']}>2 пересадки</p>
          <p className={styles['flight-card__text']}>HKG, JNB</p>
        </div>
      </div>
    </div>
  )
}

export default FlightCard
