import React from 'react'
import { Link } from 'react-router-dom'
import Product from '../Product.jsx'

const links = {
  2017: [],
  2018: [
    <li key="0">A&D Report changes between 2017 and 2018</li>,
    <li key="1"><Link to="/2018/derived-data-fields/">Derived Data Fields</Link></li>
  ]
}

const ADReports = props => {
  const { year, inList, url } = props
    return (
      <Product
        heading="Aggregate and Disclosure Reports"
        lead="These reports summarize nationwide and MSA/MD lending activity."
        list={links[year]}
        inList={inList}
        year={year}
        url={url}
      />
  )
}

export default ADReports
