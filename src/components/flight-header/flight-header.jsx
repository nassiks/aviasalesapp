import React from 'react'

import Logo from '../../assets/img/Logo.png'

import styles from './flight-header.module.scss'

export const FlightHeader = () => {
  return (
    <div className={styles['header']}>
      <img src={Logo} alt="logo" className={styles['header-image']} />
    </div>
  )
}
