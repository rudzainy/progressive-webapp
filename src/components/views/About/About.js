import React, { Component } from 'react'
import styles from './About.css'

export default class About extends Component {
  render () {
    return (
      <article className='card'>
        <h2 className={styles.heading}>About Me</h2>
        <p>Dummy contents</p>
      </article>
    )
  }
}
