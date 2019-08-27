import React from 'react'
import { Link } from 'react-router-dom'
import Header from './common/Heading.jsx'
import YearSelector from './common/YearSelector.jsx'
import Publications from './publications'
import Tools from './tools'

import './Home.css'

const Home = props => {
  return (
    <div className="home">
      <div className="intro">
        <Header type={1} headingText="HMDA Documentation">
          <p className="lead">A collection of HMDA Documentation Resources</p>
        </Header>
      </div>
      <YearSelector {...props}/>
      <div>
        <h2>HMDA Publications</h2>
        <Publications {...props}/>
      </div>
      <div>
        <h2>HMDA Tools</h2>
        <Tools {...props}/>
      </div>
    </div>
  )
}

export default Home
