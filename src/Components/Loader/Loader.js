import React from 'react'
import './Loader.css'
function Loader({displayClass}) {
  return (
    <div className={`loader ${displayClass}`}></div>
  )
}

export default Loader