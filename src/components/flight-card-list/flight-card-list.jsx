import React from 'react'

import FlightCard from '../flight-cart'
import ShowMoreButton from '../show-more-button'
import SortPanel from '../sort-panel'

import styles from './flight-card-list.module.scss'

const FlightCardList = () => {
  return (
    <div className={styles['flight-card-list']}>
      <SortPanel />
      <FlightCard />
      <ShowMoreButton />
    </div>
  )
}
export default FlightCardList
