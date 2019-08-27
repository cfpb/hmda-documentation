import React from 'react'
import { Link } from 'react-router-dom'
import Product from '../Product.jsx'

const links = {
  2017: [
    <li key="0" ><a href="https://s3.amazonaws.com/cfpb-hmda-public/prod/snapshot-data/2017_publicstatic_dataformat.pdf">Snapshot File Specifications – LAR, TS, and Reporter Panel</a></li>,
    <li key="1"><a href="https://s3.amazonaws.com/cfpb-hmda-public/prod/snapshot-data/2017_publicstatic_codesheet.pdf">Snapshot File Specifications – LAR Code Sheet</a></li>,
    <li key="2"><a href="https://github.com/cfpb/hmda-platform/blob/v1.x/Documents/2017_Dynamic_LAR_Spec.csv">Dynamic File Specifications – Loan/Application Records</a></li>,
    <li key="3"><a href="https://github.com/cfpb/hmda-platform/blob/v1.x/Documents/2017_Dynamic_TS_Spec.csv">Dynamic File Specifications – Transmittal Sheet Records</a></li>
  ],
  2018: [
    <li key="4"><Link to="/2018/lar-data-fields/">Public HMDA Data Fields with Values and Definitions</Link></li>,
    <li key="5"><Link to="/2018/derived-data-fields/">Derived Data Fields</Link></li>
  ]
}

const SnapshotDynamic = props => {
  const { year, inList, url } = props
  return (
    <Product
      heading="Snapshot and Dynamic National Loan Level Dataset"
      lead="These files contain the national HMDA datasets, modified by the Bureau to protect applicant and borrower privacy."
      list={links[year]}
      inList={inList}
      year={year}
      url={url}
    />
  )
}

export default SnapshotDynamic
