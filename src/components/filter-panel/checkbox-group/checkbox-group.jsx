import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { toggleCheckbox } from '../../../redux/actions'

import styles from './checkbox-group.module.scss'
const CheckboxGroup = () => {
  const dispatch = useDispatch()
  const filters = useSelector((state) => state.sort.filters)

  const checkboxData = [
    { id: 'value1', label: 'Без пересадок' },
    { id: 'value2', label: '1 пересадка' },
    { id: 'value3', label: '2 пересадки' },
    { id: 'value4', label: '3 пересадки' },
  ]

  const handleChange = (e) => {
    dispatch(toggleCheckbox(e.target.id))
  }

  const handleAllChange = (e) => {
    const { checked } = e.target
    ;['value1', 'value2', 'value3', 'value4'].forEach((id) => {
      dispatch(toggleCheckbox(id, checked))
    })
  }

  const allChecked = ['value1', 'value2', 'value3', 'value4'].every((id) => filters[id])

  return (
    <form className={styles['checkbox-group']}>
      <div key="all" className={styles['checkbox-group__item']}>
        <input
          id="all"
          type="checkbox"
          name="all"
          checked={allChecked}
          onChange={handleAllChange}
          className={styles['checkbox-group__item-checkbox']}
        />
        <span className={styles['checkbox-group__item-checkmark']}></span>
        <label htmlFor="all" className={styles['checkbox-group__item-label']}>
          Все
        </label>
      </div>
      {checkboxData.map(({ id, label }) => (
        <div key={id} className={styles['checkbox-group__item']}>
          <input
            id={id}
            type="checkbox"
            name={id}
            checked={filters[id]}
            onChange={handleChange}
            className={styles['checkbox-group__item-checkbox']}
          />
          <span className={styles['checkbox-group__item-checkmark']}></span>
          <label htmlFor={id} className={styles['checkbox-group__item-label']}>
            {label}
          </label>
        </div>
      ))}
    </form>
  )
}

export default CheckboxGroup
