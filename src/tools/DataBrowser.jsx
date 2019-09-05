import React from 'react'
import { Link } from 'react-router-dom'
import Product from '../Product.jsx'

const links = {
  2017: [
    <li key="0">The HMDA Data Browser currently allows users to filter and download HMDA datasets for 2018 and beyond. Historic data from 2007-2017 is <a target="_blank" rel="noopener noreferrer" href="https://www.consumerfinance.gov/data-research/hmda/historic-data/">available for download here</a>.</li>
  ],
  2018: [
    <li key="1"><Link to="/2018/faq/">Frequently Asked Questions</Link></li>,
    <li key="2"><Link to="/2018/data-browser-filters/">Available Filters</Link></li>,
    <li key="3"><Link to="/2018/derived-data-fields/">Derived Data Fields</Link></li>,
    <li key="4"><Link to="/2018/lar-data-fields/">Public HMDA Data Fields with Values and Definitions</Link></li>,
  ]
}

const DataBrowser = props => {
  const { year, inList, url } = props
  return (
    <Product
      heading="Data Browser"
      lead="This tool allows users to filter and download HMDA datasets."
      list={links[year]}
      inList={inList}
      year={year}
      url={url}
      collection="tools"
      slug="data-browser"
    />
  )
}

export default DataBrowser
