import React from 'react'

import styles from './show-more-button.module.scss'

const ShowMoreButton = ({ onClick }) => {
  return (
    <button className={styles['show-more-button']} onClick={onClick}>
      Показать еще 5 билетов!
    </button>
  )
}

export default ShowMoreButton
