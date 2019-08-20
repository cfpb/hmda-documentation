import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Header from './common/Header'
import Home from './Home'
import PerYear from './PerYear'
import NotFound from './common/NotFound'
import Footer from './common/Footer'
import LarDataFields from './LarDataFields'

import './app.css'

const App = () => {
  return (
    <React.Fragment>
      <Header/>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/:year/" component={PerYear} />
        <Route path="/:year/lar-data-fields" component={LarDataFields} />
        <Route component={NotFound} />
      </Switch>
      <Footer />
    </React.Fragment>
  )
}

export default App
