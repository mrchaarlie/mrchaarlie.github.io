import React, { useState, useEffect, useRef } from 'react'
import styled from 'styled-components'

import WidthWrapper from 'components/WidthWrapper'
import { Header } from 'components/Header'
import Hero from 'components/Hero'
import Section from 'components/Section'
import Portfolio from 'components/Portfolio'
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
 
  const scrollListener = () => {
    setScrollPos(window.scrollY)
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

      <Header />
      <Hero />
  
      <Section>
        <Portfolio />
      </Section>
  
      <Section>
        <Process />
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