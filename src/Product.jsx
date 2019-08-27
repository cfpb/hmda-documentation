import React from 'react'
import Heading from './common/Heading.jsx'
import YearSelector from './common/YearSelector.jsx'

const Product = props => {
  const { heading, lead, list, inList, url, year } = props
  let header

  if(!list.length) return null

  if(inList){
    header = <h4>{heading}</h4>
  }else{
    header = (
      <Heading type={1} headingText={heading}>
        <p className="lead">{lead}</p>
      </Heading>
    )
  }

  const product = (
    <div className="Product">
      <div className="intro">
        { header }
        { inList ? <p>{lead}</p> : null}
        { inList ? null : <YearSelector year={year} url={url}/> }
        { inList ? null : <h4>Documentation</h4> }
        <ul>
          {list}
        </ul>
      </div>
    </div>
  )

  return props.inList ? <li>{product}</li> : product
}

export default Product
