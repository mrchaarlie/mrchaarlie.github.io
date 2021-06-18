import React, { useState, useEffect, useRef } from 'react'
import styled from 'styled-components'
import { Helmet } from 'react-helmet'
import Header from 'components/Header'
import Hero from 'components/Hero'
import Section from 'components/Section'
import Work from 'components/Work'
import Skills from 'components/Skills'
import About from 'components/About'
import FooterMargin from 'components/FooterMargin'
import { Footer } from 'components/Footer'

const Main = styled.div`
  position: relative;
  z-index: 10;
  background: ${props => props.theme.colors.offWhite};
`

export default () => {
  const [scrollPos, setScrollPos] = useState(0)
  const [navShadow, setNavShadow] = useState(false)

  const scrollListener = () => {
    if (typeof window !== 'undefined') {
      setScrollPos(window.scrollY)
      setNavShadow(window.scrollY > 60 ? true : false)
    } 
  }

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', scrollListener)

      return () => {
        window.removeEventListener('scroll', scrollListener)
      }
    }
  }, [])

  return (
    <>
      <Helmet>
        <title>Charles Wu | Product Designer</title>
      </Helmet>
      <Main>
        <Header showShadow={navShadow} />
        <Hero />

        <Section>
          <Skills />
        </Section>

        <Section name="work" id="work">
          <Work />
        </Section>

        <Section id="about">
          <About />
        </Section>
        <FooterMargin />
      </Main>

      <Footer />
    </>
  )
}
