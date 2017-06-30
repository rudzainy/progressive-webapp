import React, { Component } from 'react'
// import styles from './Home.css'
import Post from '../../Post/Post'
import posts from '../../../blog-posts.json'

export default class Home extends Component {
  render () {
    return (
      <section>
        {
          posts.posts.map((post) => {
            return (
              <Post key={post.slug} post={post} />
            )
          })
        }
      </section>
    )
  }
}
