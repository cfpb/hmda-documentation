import React, { Component } from 'react'
import Header from './common/Heading.jsx'
import { Link } from 'react-router-dom'

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
        <div>
          <Link to="/lar-data-fields/">
            LAR Data Fields
          </Link>
        </div>
      </div>
    )
  }
}

export default Home
