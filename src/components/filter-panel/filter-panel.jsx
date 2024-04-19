import React from 'react'

import CheckboxGroup from './checkbox-group'
import styles from './filter-panel.module.scss'

const FilterPanel = () => {
  return (
    <div className={styles['filter-panel']}>
      <h2 className={styles['filter-panel__title']}>Количество пересадок</h2>
      <CheckboxGroup />
    </div>
  )
}

export default FilterPanel
