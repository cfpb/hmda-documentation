import React, { Component } from 'react'
import Header from './common/Heading.jsx'
import { Link } from 'react-router-dom'
import YearLinks from './YearLinks'

import './Home.css'

class Home extends Component {
  render() {
    return (
      <div className="home">
        <div className="intro">
          <Header type={1} headingText="HMDA Documentation">
            <p className="lead">A collection of HMDA Documentation Resources</p>
          </Header>
        </div>
        <div className="YearLinksWrapper">
          <Link to="/2018/"><h2>2018</h2></Link>
          <YearLinks year="2018"/>
        </div>
      </div>
    )
  }
}

export default Home
