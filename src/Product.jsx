import React from 'react'

const Product = props => {
  const { heading, lead, list } = props

  if(!list.length) return null

  const product = (
    <div className="Product">
      <div className="intro">
        <h4>{heading}</h4>
        <p>{lead}</p>
        <ul>
          {list}
        </ul>
      </div>
    </div>
  )

  return props.inList ? <li>{product}</li> : product
}

export default Product
