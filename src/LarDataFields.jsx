import React, { useEffect } from 'react'
import Markdown from 'markdown-to-jsx'
import LAR_Data_Fields from '!!raw-loader!../markdown/LAR_data_fields.md' //eslint-disable-line import/no-webpack-loader-syntax

//const LAR_url = https://

const LarDataFields = () => {
/*  useEffect(function (){
    fetch(
  }, [])*/
  useEffect(function (){
    const { hash } = window.location
    if(hash) {
      setTimeout(() => {
        const stripped = hash.replace(/[#_]/g, '')
        const id = stripped + stripped
        const element = document.getElementById(id)
        console.log(element)
        if (element) setTimeout(()=>element.scrollIntoView(), 0)
      }, 0)
    }
  })

  return (
    <div className="Markdown-Wrapper">
      <Markdown>{LAR_Data_Fields}</Markdown>
    </div>
  )
}

export default LarDataFields
