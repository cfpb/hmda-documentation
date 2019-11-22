import React from 'react'
import { Link } from 'react-router-dom'

const links = {
  2017: [
    <li key="0"><Link to="/2017/identifiers-faq/">Institution Identifiers FAQ</Link></li>,
  ],
  2018: [
    <li key="1"><Link to="/2018/identifiers-faq/">Institution Identifiers FAQ</Link></li>,
    <li key="2"><Link to="/2018/data-browser-faq/">Data Browser FAQ</Link></li>,
    <li key="3"><Link to="/2018/filing-faq/">HMDA Filing FAQ</Link></li>,
  ],
  2019: [
    <li key="4"><Link to="/2019/identifiers-faq/">Institution Identifiers FAQ</Link></li>,
    <li key="5"><Link to="/2019/data-browser-faq/">Data Browser FAQ</Link></li>,
    <li key="6"><Link to="/2019/filing-faq/">HMDA Filing FAQ</Link></li>,
  ],
  2020: [
    <li key="7"><Link to="/2020/identifiers-faq/">Institution Identifiers FAQ</Link></li>,
    <li key="8"><Link to="/2020/data-browser-faq/">Data Browser FAQ</Link></li>,
    <li key="9"><Link to="/2020/filing-faq/">HMDA Filing FAQ</Link></li>,
  ]
}

const FAQs = props => {
  return (
    <>
        <ul>{links[props.year]}</ul>
    </>
  )
}

export default FAQs
