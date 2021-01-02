import React, { useState, useEffect } from 'react'
import { Header } from 'components/Header'
import Process from '../components/Process'

export default () => {
  const [shadow, setShadow ] = useState(false);
 
  const scrollListener = () => {
    setShadow(window.scrollY > 60 ? true : false);
  }

  useEffect(() => {
    setShadow(window.scrollY > 0 ? true : false)
    window.addEventListener('scroll', scrollListener)
  
    return () => {
      window.removeEventListener('scroll', scrollListener)
    }
  })

  return(
  <>
    <Header hasShadow={shadow}/>
    <Process></Process>
  </>
)}
