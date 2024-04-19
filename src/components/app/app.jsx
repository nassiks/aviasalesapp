import React, { Component } from 'react'

import FlightCardList from '../flight-card-list'
import FilterPanel from '../filter-panel'

import styles from './app.module.scss'
export default class App extends Component {
  render() {
    return (
      <div className={styles['app']}>
        <FilterPanel />
        <FlightCardList />
      </div>
    )
  }
}
