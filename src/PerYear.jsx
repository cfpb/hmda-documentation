import React from 'react'
import { Link } from 'react-router-dom'
import Heading from './common/Heading.jsx'
import NotFound from './common/NotFound.jsx'
import YearLinks from './YearLinks'
import { isBadYear } from './markdownUtils'

import './Home.css'

const PerYear = props => {
  const { year } = props.match.params

  if(isBadYear(year)) return <NotFound/>

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
