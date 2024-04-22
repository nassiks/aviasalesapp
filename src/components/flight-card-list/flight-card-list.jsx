import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Alert, Spin } from 'antd'

import FlightCard from '../flight-cart'
import ShowMoreButton from '../show-more-button'
import SortPanel from '../sort-panel'
import { fetchTickets } from '../../redux/actions'

import styles from './flight-card-list.module.scss'

const FlightCardList = () => {
  const dispatch = useDispatch()
  const items = useSelector((state) => state.sort.items)
  const loading = useSelector((state) => state.tickets.loading)
  const error = useSelector((state) => state.tickets.error)

  const [visibleCount, setVisibleCount] = useState(5)

  useEffect(() => {
    dispatch(fetchTickets())
  }, [dispatch])

  const handleShowMore = () => {
    setVisibleCount((prevCount) => prevCount + 5)
  }

  if (error) {
    return (
      <div className={styles['flight-card-list']}>
        <SortPanel />
        <Alert message="Error" description={error} type="error" showIcon closable />
      </div>
    )
  }

  return (
    <div className={styles['flight-card-list']}>
      <SortPanel />
      {loading && (
        <Spin tip="Loading..." size="large">
          <div style={{ minHeight: '200px' }} />
        </Spin>
      )}
      {!loading && !error && items.length === 0 && (
        <Alert
          message="No Flights Found"
          description="Рейсов, подходящих под заданные фильтры, не найдено."
          type="info"
          showIcon
        />
      )}
      {items.slice(0, visibleCount).map((ticket, index) => (
        <FlightCard key={index} {...ticket} />
      ))}
      {items.length > 0 && items.length > visibleCount && <ShowMoreButton onClick={handleShowMore} />}
    </div>
  )
}
export default FlightCardList
