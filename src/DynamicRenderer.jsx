import React, { useState, useEffect } from 'react'
import Markdown from 'markdown-to-jsx'
import { Link } from 'react-router-dom'
import LoadingIcon from './common/LoadingIcon.jsx'
import NotFound from './common/NotFound.jsx'
import { getMarkdownUrl } from './markdownUtils'

const DynamicRenderer = props => {
  const [data, setData] = useState(null)
  const [error, setError] = useState(null)
  const { year, slug } = props

  useEffect(function (){
    fetch(getMarkdownUrl(year, slug))
      .then(res => {
        res.text().then(setData)
      })
      .catch(e => {
        setError(e)
      })
  }, [])

  useEffect(function (){
    if(!data) return
    const { hash } = window.location
    if(hash) {
      setTimeout(() => {
        const stripped = hash.replace(/[#_]/g, '')
        const id = stripped + stripped
        const element = document.getElementById(id)
        if (element) setTimeout(()=>element.scrollIntoView(), 0)
      }, 0)
    }
  })

  if(error) return <NotFound />

  return (
    <div className="Markdown-Wrapper">
    <Link className="BackLink" to={`/${year}`}>{'\u2b05'} {year} DOCUMENTATION</Link>
    {data
      ? <Markdown>{data}</Markdown>
      : <LoadingIcon/>
    }
    </div>
  )
}

export default DynamicRenderer
