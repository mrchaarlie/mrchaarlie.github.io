import React, { useState, useEffect, useRef } from 'react'
import styled from 'styled-components'

import WidthWrapper from 'components/WidthWrapper'
import Header from 'components/Header'
import Hero from 'components/Hero'
import Section from 'components/Section'
import Work from 'components/Work'
import Process from 'components/Process'
import Skills from 'components/Skills'
import Resume from 'components/Resume'
import Profiles from 'components/Profiles'
import Faq from 'components/Faq'

const Test = styled.div`
  position: fixed;
  z-index: 10000;
  top: 0;
  color: red;
`

export default () => {
  const [scrollPos, setScrollPos] = useState(0)
  const [shadow, setShadow ] = useState(false);
 
  const scrollListener = () => {
    setScrollPos(window.scrollY);
    setShadow(window.scrollY > 60 ? true : false);
  }

  useEffect(() => {
    window.addEventListener('scroll', scrollListener)
  
    return () => {
      window.removeEventListener('scroll', scrollListener)
    }
  })

  return (
    <div>
      <Test>{scrollPos}</Test>

      <Header hasShadow={shadow}/>
      <Hero />
  
      <Section>
        <Work />
      </Section>
    
      <Section>
        <Skills />
      </Section>
  
      <Section>
        <Resume />
      </Section>
  
      <Section>
        <Faq />
      </Section>
  
      <Section>
        <Profiles />
      </Section>
    </div>
  )  
}