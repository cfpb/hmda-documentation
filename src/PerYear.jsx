import React from 'react'
import Heading from './common/Heading.jsx'
import { Link } from 'react-router-dom'
import YearLinks from './YearLinks'

import './Home.css'

const PerYear = props => {
  const { year } = props.match.params

  return (
    <div className="PerYear">
      <Link className="BackLink" to="/">{'\u2b05'} DOCUMENTATION HOME</Link>
      <div className="intro">
        <Heading type={1} headingText={`${year} HMDA Documentation`}>
          <p className="lead">HMDA Documentation Resources for {year}</p>
        </Heading>
      </div>
      <YearLinks year={year}/>
    </div>
  )
}

export default PerYear
