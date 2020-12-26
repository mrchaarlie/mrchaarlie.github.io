import React, { useState, useEffect, useRef } from 'react'
import styled from 'styled-components'
import { Header } from './Header'
import WidthWrapper from './WidthWrapper'

const Wrapper = styled.div`
  margin: 4rem 0;

  @media ${props => props.theme.media.medium} {
    margin: 7rem 0;
  }
`

const TITLE_ANIM_DURATION = 0.7;

const HeroContainer = styled.div`
  text-align: left;
  margin: 0 auto 6rem;
  position: relative;
  z-index: 999;
  animation: zoomOut ${TITLE_ANIM_DURATION}s ${props => props.theme.easings.easeOutCubic} 0s forwards;
`
const HeroText = styled.h2`
  position: relative;
  z-index: 150;
  color: ${props => props.theme.colors.primary};

  @supports (-webkit-background-clip: text) {
    background: linear-gradient(173deg, ${props => props.theme.colors.primary} 15%, ${props => props.theme.colors.secondary} 50%);
    background-attachment: fixed;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  @media ${props => props.theme.media.medium} {
  }
`
const Title = styled.div`
  font-size: 2.25rem;
  color: ${props => props.theme.colors.darkGrey};
  position: relative;
  margin-top: -0.75rem;
  z-index: 1;
  opacity: 0;
  animation: slideInDown 0.75s ${props => props.theme.easings.easeOutCubic}
    ${TITLE_ANIM_DURATION + 0.15}s forwards;
`
const HeroIntro = styled.div`
  position: relative;

  &:after {
    content: '';
    pointer-events: none;
    position: fixed;
    z-index: 100;
    left: -5%;
    bottom: 0;
    width: 110%;
    height: 100%;
    background: ${props => props.theme.colors.white};
    animation: slideOutDown 0.35s ${props => props.theme.easings.easeOutCubic}
      ${TITLE_ANIM_DURATION + 0.4}s forwards;
  }
`

const Test = styled.div`
  position: fixed;
  z-index: 10000;
  top: 0;
  color: red;
`
const WaveEmoji = styled.span`
  -webkit-text-fill-color: #000;
  display: inline-block;
  opacity: 0;
  animation: fadeInToRight 0.5s ease-out 2s forwards;
`

const Hero = () => {
  // const [scrollPos, setScrollPos] = useState(0)
  // const [navBarVisible, setNavBarVisible] = useState(false)
  // const [navBarDisabled, setNavBarDisabled] = useState(false)
  // const [navBarFadeOut, setNavBarFadeOut] = useState(false)

  // const heroTitleRef = useRef(null);

  // const showTopNavBar = () => {
  //   setNavBarVisible(true)
  //   setNavBarDisabled(false)
  // }

  // const hideTopNavBar = () => {
  //   navBarVisible && setNavBarFadeOut(true)
  //   setNavBarVisible(false)
  // }

  // const scrollListener = () => {
  //   setScrollPos(window.scrollY)
  // }

  // useEffect(() => {
  //   window.addEventListener('scroll', scrollListener)

  //   // disable the Navbar after it transitions out.
  //   if (heroTitleRef.current.getBoundingClientRect().bottom < 16) {
  //     showTopNavBar()
  //   } else {
  //     hideTopNavBar()

  //     const navTimer = setTimeout(() => {
  //       setNavBarDisabled(true)
  //     }, 20)

  //     return () => clearTimeout(navTimer)
  //   }

  //   return () => {
  //     window.removeEventListener('scroll', scrollListener)
  //   }
  //})

  return (
    <Wrapper>
      {/* <Test>{scrollPos}</Test> */}
      <Header />
      {/* <Header
        isVisible={navBarVisible}
        fadeOut={navBarFadeOut}
        disabled={navBarDisabled}
      /> */}

     <WidthWrapper>
      {/* <HeroContainer id="Hero-Title" ref={heroTitleRef}> */}
      <HeroContainer id="Hero-Title" >
        <HeroText>Hi, I'm Charles. <WaveEmoji>👋</WaveEmoji><br />
        I'm a product designer.</HeroText>
      </HeroContainer>
      </WidthWrapper>

      <WidthWrapper>
        <HeroIntro>
          <p>
            Currently, I'm at LivePerson building the future of <em>intent-driven</em> business.
          </p>
        </HeroIntro>


      </WidthWrapper>
    </Wrapper>
  )
}

export default Hero
