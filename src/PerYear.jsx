import React from 'react'
import Heading from './common/Heading.jsx'
import { Link } from 'react-router-dom'
import Links2018 from './Links2018'

import './Home.css'

function selectYear(year) {
  switch(year) {
    case '2017':
      return null
    case '2018':
      return <Links2018/>
    case '2019':
      return null
    default:
      return <p>There are no documentation resources for your selected year.</p>
  }
}

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
      {selectYear(year)}
    </div>
  )
}

export default PerYear
