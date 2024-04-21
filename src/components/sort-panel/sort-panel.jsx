import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { setSort } from '../../redux/actions'

import styles from './sort-panel.module.scss'

const SortPanel = () => {
  const dispatch = useDispatch()
  const currentSort = useSelector((state) => state.sort.sortField)

  const sortOptions = [
    { id: 'cheapest', label: 'Самый дешевый' },
    { id: 'fastest', label: 'Самый быстрый' },
    { id: 'optimal', label: 'Оптимальный' },
  ]

  const handleSortChange = (sortType) => {
    dispatch(setSort(sortType))
  }

  return (
    <div className={styles['sort-panel']}>
      {sortOptions.map((option) => (
        <button
          key={option.id}
          onClick={() => handleSortChange(option.id)}
          className={`${styles['sort-panel__button']} ${currentSort === option.id ? styles['sort-panel__button-active'] : ''}`}
        >
          {option.label}
        </button>
      ))}
    </div>
  )
}

export default SortPanel
