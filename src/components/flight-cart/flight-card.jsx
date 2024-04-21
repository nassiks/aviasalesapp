import React from 'react'

import { formatDuration, formatDate } from '../../utils/formatDate'
import { formatStopsText } from '../../utils/formatText'

import styles from './flight-card.module.scss'

const FlightCard = ({ price, carrier, segments }) => {
  const logoUrl = `//pics.avs.io/99/36/${carrier}.png`

  return (
    <div className={styles['flight-card']}>
      <div className={styles['flight-card__header']}>
        <div className={styles['flight-card__price']}>{price}Р</div>
        <div className={styles['flight-card__logo']}>
          <img src={logoUrl} alt={`${carrier} logo`} />
        </div>
      </div>
      {segments.map((segments, index) => (
        <div key={index} className={styles['flight-card__body']}>
          <div className={styles['flight-card__body-rote']}>
            <p className={styles['flight-card__label']}>
              {segments.origin} – {segments.destination}
            </p>
            <p className={styles['flight-card__text']}>{formatDate(segments.date, segments.duration)}</p>
          </div>
          <div className={styles['flight-card__body-length']}>
            <p className={styles['flight-card__label']}>В пути</p>
            <p className={styles['flight-card__text']}>{formatDuration(segments.duration)}</p>
          </div>
          <div className={styles['flight-card__body-stops']}>
            <p className={styles['flight-card__label']}>{formatStopsText(segments.stops.length)}</p>
            <p className={styles['flight-card__text']}>{segments.stops.join(', ') || 'Прямой рейс'}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default FlightCard
