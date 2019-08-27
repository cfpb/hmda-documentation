import React from 'react'
import { Switch, Redirect, Route } from 'react-router-dom'

import Header from './common/Header'
import Home from './Home'
import PerYear from './PerYear'
import NotFound from './common/NotFound'
import Footer from './common/Footer'
import DynamicRenderer from './DynamicRenderer'

import './app.css'

const App = () => {
  return (
    <React.Fragment>
      <Header/>
      <Switch>
        <Redirect exact from="/" to="/2018/" />
        <Route exact path="/:year/" render={props => {
          return (
            <div className="App">
              <Home {...props}/>
            </div>
          )
        }}/>
        <Route exact path="/:year/:collection/" render={props => {
          return (
            <div className="App">
              <Home year={props.match.params.year}/>
            </div>
          )
        }}/>
        <Route exact path="/:year/:collection/:slug/" render={props => {
          return (
            <div className="App">
              <Home year={props.match.params.year}/>
            </div>
          )
        }}/>
        <Route component={NotFound} />
      </Switch>
      <Footer />
    </React.Fragment>
  )
}

export default App
