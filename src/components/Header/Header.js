import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styles from './Header.css'

export default class Header extends Component {
  render () {
    return (
      <header className={styles.header}>
        <div className={styles.container}>
          <h1 className={styles.title}>Logo</h1>
          <nav>
            <ul className={styles.list}>
              <li className={styles.listItem}><Link to='/' className={styles.navLink}>Posts</Link></li>
              <li className={styles.listItem}><Link to='/about' className={styles.navLink}>About</Link></li>
            </ul>
          </nav>
        </div>
      </header>
    )
  }
}
