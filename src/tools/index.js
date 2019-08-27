import React from 'react'
import { Link } from 'react-router-dom'
import Heading from '../common/Heading.jsx'
import DataBrowser from './DataBrowser.jsx'
import RateSpread from './RateSpread.jsx'
import CheckDigit from './CheckDigit.jsx'

const Tools = props => {
  const { year } = props.match.params
  return (
    <ul className="ProductCollection">
      <DataBrowser year={year} inList={true}/>
      <RateSpread year={year} inList={true}/>
      <CheckDigit year={year} inList={true}/>
    </ul>
  )
}

export default Tools
