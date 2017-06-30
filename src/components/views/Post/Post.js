import React, { Component } from 'react'
import styles from './Post.css'
import posts from '../../../blog-posts.json'

export default class Post extends Component {
  render () {
    const post = posts.posts.find((post) => this.props.match.params.slug === post.slug)
    return (
      <article className='card'>
        <h2 className={styles.heading}>{post.title}</h2>
        <p>{post.content}</p>
      </article>
    )
  }
}
