import React, { useState, useEffect, useRef } from 'react'
import styled from 'styled-components'
import Header from './Header'
import WidthWrapper from './WidthWrapper'
import _RightArrow from './icons/RightArrowInCircle'

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
  z-index: 10;
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
const HeroIntro = styled.div`
  position: relative;

  // White screen sliding down effect
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
      0s forwards;
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

const RightArrow = styled(_RightArrow)`
  width: 1.125em;
  height: 1.125em;
  margin: 0 0 -0.25em 0.125em;
  color: ${props => props.theme.colors.primaryDark};
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
          <h4>
          Currently, I’m at LivePerson building the future of conversational commerce. <br /><br />
          Check out some of my work <RightArrow  />
          </h4>
        </HeroIntro>


      </WidthWrapper>
    </Wrapper>
  )
}

export default Hero
