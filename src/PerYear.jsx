import React from 'react'
import Heading from './common/Heading.jsx'
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
    <div className="home">
      <div className="intro">
        <Heading type={1} headingText="HMDA Documentation">
          <p className="lead">HMDA Documentation Resources for {props.match.params.year}</p>
        </Heading>
      </div>
      {selectYear(year)}
    </div>
  )
}

export default PerYear
