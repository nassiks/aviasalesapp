import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import FlightCard from '../flight-cart'
import ShowMoreButton from '../show-more-button'
import SortPanel from '../sort-panel'
import { fetchTickets } from '../../redux/actions'

import styles from './flight-card-list.module.scss'

const FlightCardList = () => {
  const dispatch = useDispatch()
  const { tickets, loading, error } = useSelector((state) => state.tickets)

  useEffect(() => {
    dispatch(fetchTickets())
  }, [dispatch])

  return (
    <div className={styles['flight-card-list']}>
      <SortPanel />
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {tickets.map((ticket, index) => (
        <FlightCard key={index} {...ticket} />
      ))}
      <ShowMoreButton />
    </div>
  )
}
export default FlightCardList
