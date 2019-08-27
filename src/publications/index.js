import React from 'react'
import { Link } from 'react-router-dom'
import Heading from '../common/Heading.jsx'
import ModifiedLar from './ModifiedLar.jsx'
import ADReports from './ADReports.jsx'
import SnapshotDynamic from './SnapshotDynamic.jsx'

const Publications = props => {
  const { year } = props.match.params
  return (
    <ul className="ProductCollection">
      <ModifiedLar year={year} inList={true}/>
      <ADReports year={year} inList={true}/>
      <SnapshotDynamic year={year} inList={true}/>
    </ul>
  )
}

export default Publications
