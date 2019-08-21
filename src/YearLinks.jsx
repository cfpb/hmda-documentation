import React from 'react'
import { Link } from 'react-router-dom'
import { getAllSlugsPerYear } from './markdownUtils'

const YearLinks = props => {
  const { year } = props

  return (
    <div className="YearLinks">
      {getAllSlugsPerYear(year).map(slug => {
        return (
          <div key={slug} className="YearLink">
            <Link to={`/${year}/${slug}/`}>
              {slug.replace(/-/g, ' ')}
            </Link>
          </div>
        )
      })}
    </div>
  )
}

export default YearLinks
