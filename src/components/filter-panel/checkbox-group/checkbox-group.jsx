import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { toggleCheckbox, toggleAllCheckboxes } from '../../../redux/actions'

import styles from './checkbox-group.module.scss'
const CheckboxGroup = () => {
  const dispatch = useDispatch()
  const checkboxes = useSelector((state) => state.checkboxes)

  const checkboxData = [
    { id: 'all', label: 'Все' },
    { id: 'value1', label: 'Без пересадок' },
    { id: 'value2', label: '1 пересадка' },
    { id: 'value3', label: '2 пересадки' },
    { id: 'value4', label: '3 пересадки' },
  ]

  const handleChange = (e) => {
    const { id, checked, name } = e.target
    if (name === 'all') {
      dispatch(toggleAllCheckboxes(checked))
    } else {
      dispatch(toggleCheckbox(id))
    }
  }

  return (
    <form className={styles['checkbox-group']}>
      {checkboxData.map(({ id, label }) => (
        <div key={id} className={styles['checkbox-group__item']}>
          <input
            id={id}
            type="checkbox"
            name={id}
            checked={checkboxes[id]}
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
