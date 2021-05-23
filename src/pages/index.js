import React, { useState, useEffect, useRef } from 'react'
import styled from 'styled-components'

import WidthWrapper from 'components/WidthWrapper'
import Header from 'components/Header'
import Hero from 'components/Hero'
import Section from 'components/Section'
import Work from 'components/Work'
import Skills from 'components/Skills'
import Resume from 'components/Resume'
// import Process from 'components/Process'
// import Profiles from 'components/Profiles'
// import Faq from 'components/Faq'

const Test = styled.div`
  position: fixed;
  z-index: 10000;
  top: 0;
  color: red;
`

const getPageAnimation = ({ showAnimation }) => {
  return showAnimation ? 'block' : 'none';
}
const PageRevealAnimation = styled.div`
  display: ${props => getPageAnimation({ showAnimation: props.showAnimation})};
  pointer-events: none;
  position: fixed;
  z-index: 100;
  left: -5%;
  bottom: 0;
  width: 110%;
  height: 100%;
  background: ${props => props.theme.colors.offWhite};
  animation: slideOutDown 0.35s ${props => props.theme.easings.easeOutCubic}
  0s forwards;
`

export default () => {
  const [scrollPos, setScrollPos] = useState(0); // for debugging
  const [navShadow, setNavShadow ] = useState(false);
  // const [showAnimation, setShowAnimation ] = useState(true);
 
  const scrollListener = () => {
    setScrollPos(window.scrollY);
    setNavShadow(window.scrollY > 60 ? true : false);
  }

  useEffect(() => {
    window.addEventListener('scroll', scrollListener)
    // setTimeout(() => { setShowAnimation(false) }, 1000);
  
    return () => {
      window.removeEventListener('scroll', scrollListener);
    }
  }, []);

  return (
    <div>
      <Test>{scrollPos}</Test>
      {/* <PageRevealAnimation showAnimation={showAnimation} /> */}

      <Header showShadow={navShadow}/>
      <Hero />
      
      <Section>
        <Skills />
      </Section>
  
      <Section>
        <Work />
      </Section>
  
      <Section>
        <Resume />
      </Section>
  
    </div>
  )  
}