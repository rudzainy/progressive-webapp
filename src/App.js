import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import 'normalize.css'
import styles from './App.css'
import Header from './components/Header/Header'
import About from './components/views/About/About'
import Home from './components/views/Home/Home'
import Post from './components/views/Post/Post'
import NoMatch from './components/views/NoMatch/NoMatch'

export default class App extends Component {
  render () {
    return (
      <BrowserRouter>
        <div>
          <Header />
          <section className={styles.contentContainer}>
            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/about' component={About} />
              <Route exact path='/posts/:slug' component={Post} />
              }} />
              <Route component={NoMatch} />
            </Switch>
          </section>
        </div>
      </BrowserRouter>
    )
  }
}
