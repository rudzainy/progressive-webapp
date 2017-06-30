import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styles from './Post.css'

export default class Post extends Component {
  render () {
    const { post } = this.props
    return (
      <article className='card'>
        <h2 className={styles.title}>
          <Link to={`/posts/${post.slug}`}>{post.title}</Link>
        </h2>
        <p>{post.excerpt}</p>
      </article>
    )
  }
}
