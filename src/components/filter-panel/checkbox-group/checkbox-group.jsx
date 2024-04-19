import React from 'react'

import styles from './checkbox-group.module.scss'
const CheckboxGroup = () => {
  return (
    <form className={styles['checkbox-group']}>
      <div className={styles['checkbox-group__item']}>
        <input
          id="value1"
          type="checkbox"
          name="value1"
          value="value1"
          className={styles['checkbox-group__item-checkbox']}
        />
        <span className={styles['checkbox-group__item-checkmark']}></span>
        <label htmlFor="value1" className={styles['checkbox-group__item-label']}>
          Все
        </label>
      </div>
      <div className={styles['checkbox-group__item']}>
        <input
          id="value2"
          type="checkbox"
          name="value2"
          value="value2"
          className={styles['checkbox-group__item-checkbox']}
        />
        <span className={styles['checkbox-group__item-checkmark']}></span>
        <label htmlFor="value2" className={styles['checkbox-group__item-label']}>
          Без пересадок
        </label>
      </div>
      <div className={styles['checkbox-group__item']}>
        <input
          id="value3"
          type="checkbox"
          name="value3"
          value="value3"
          className={styles['checkbox-group__item-checkbox']}
        />
        <span className={styles['checkbox-group__item-checkmark']}></span>
        <label htmlFor="value3" className={styles['checkbox-group__item-label']}>
          1 пересадка
        </label>
      </div>
      <div className={styles['checkbox-group__item']}>
        <input
          id="value4"
          type="checkbox"
          name="value4"
          value="value4"
          className={styles['checkbox-group__item-checkbox']}
        />
        <span className={styles['checkbox-group__item-checkmark']}></span>
        <label htmlFor="value4" className={styles['checkbox-group__item-label']}>
          2 пересадки
        </label>
      </div>
      <div className={styles['checkbox-group__item']}>
        <input
          id="value5"
          type="checkbox"
          name="value5"
          value="value5"
          className={styles['checkbox-group__item-checkbox']}
        />
        <span className={styles['checkbox-group__item-checkmark']}></span>
        <label htmlFor="value5" className={styles['checkbox-group__item-label']}>
          3 пересадки
        </label>
      </div>
    </form>
  )
}

export default CheckboxGroup
