import React, { Component } from 'react'
import styles from './NoMatch.css'

export default class NoMatch extends Component {
  render () {
    return (
      <section className='card'>
        <h1 className={styles.header}>Oh no!</h1>
        <p className={styles.paragraph}>The page cannot be found</p>
      </section>
    )
  }
}
