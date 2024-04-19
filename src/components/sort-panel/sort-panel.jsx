import React from 'react'

import styles from './sort-panel.module.scss'

const SortPanel = () => {
  return (
    <div className={styles['sort-panel']}>
      <button className={`${styles['sort-panel__button']} ${styles['sort-panel__button-active']}`}>
        Самый дешевый
      </button>
      <button className={styles['sort-panel__button']}>Самый быстрый</button>
      <button className={styles['sort-panel__button']}>Оптимальный</button>
    </div>
  )
}

export default SortPanel
