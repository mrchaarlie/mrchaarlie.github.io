import React, { useState, useEffect, useRef } from 'react'
import styled from 'styled-components'
import { Header, BackgroundHeader } from './Header'
import WidthWrapper from './WidthWrapper'

const Wrapper = styled.div`
  margin: 4rem 0;

  @media ${props => props.theme.media.medium} {
    margin: 7rem 0;
  }
`

const TITLE_ANIM_DURATION = 0.7

const HeroContainer = styled.div`
  text-align: center;
  padding: 0 2rem;
  margin: 0 auto 6rem;
  max-width: 50rem;
  position: relative;
  z-index: 999;
  animation: zoomOut ${TITLE_ANIM_DURATION}s cubic-bezier(0.17, 0.84, 0.44, 1) 0s forwards;
`
const HeroText = styled.h1`
  position: relative;
  z-index: 150;
  font-size: 2rem;
  // color: ${props => props.theme.colors.primary};
  background: linear-gradient(135deg, #b56893, #272f7d);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  // margin-bottom: 0.5rem;
  // background: rgb(255, 255, 255);
  // background: linear-gradient(
  //   0deg,
  //   rgba(255, 255, 255, 0) 0%,
  //   rgba(255, 255, 255, 1) 20%,
  //   rgba(255, 255, 255, 1) 100%
  // );

  @media ${props => props.theme.media.medium} {
    font-size: 2.5rem;
  }
`
const Title = styled.div`
  font-size: 2.25rem;
  color: ${props => props.theme.colors.darkGrey};
  position: relative;
  margin-top: -0.75rem;
  z-index: 1;
  opacity: 0;
  animation: slideInDown 0.75s cubic-bezier(0.17, 0.84, 0.44, 1)
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
    animation: slideOutDown 0.35s cubic-bezier(0.17, 0.84, 0.44, 1)
      ${TITLE_ANIM_DURATION + 0.4}s forwards;
  }
`

const Test = styled.div`
  position: fixed;
  z-index: 10000;
  top: 0;
  color: red;
`

const Hero = () => {
  const [scrollPos, setScrollPos] = useState(0)
  const [navBarVisible, setNavBarVisible] = useState(false)
  const [navBarDisabled, setNavBarDisabled] = useState(false)
  const [navBarFadeOut, setNavBarFadeOut] = useState(false)

  const heroTitleRef = useRef(null)

  const showTopNavBar = () => {
    setNavBarVisible(true)
    setNavBarDisabled(false)
  }

  const hideTopNavBar = () => {
    navBarVisible && setNavBarFadeOut(true)
    setNavBarVisible(false)
  }

  const scrollListener = () => {
    setScrollPos(window.scrollY)
  }

  useEffect(() => {
    window.addEventListener('scroll', scrollListener)

    // disable the Navbar after it transitions out.
    if (heroTitleRef.current.getBoundingClientRect().bottom < 16) {
      showTopNavBar()
    } else {
      hideTopNavBar()

      const navTimer = setTimeout(() => {
        setNavBarDisabled(true)
      }, 20)

      return () => clearTimeout(navTimer)
    }

    return () => {
      window.removeEventListener('scroll', scrollListener)
    }
  })

  return (
    <Wrapper>
      <Test>{scrollPos}</Test>
      <BackgroundHeader />
      <Header
        isVisible={navBarVisible}
        fadeOut={navBarFadeOut}
        disabled={navBarDisabled}
      />

      <HeroContainer id="Hero-Title" ref={heroTitleRef}>
        <HeroText>Hi, I'm Charles. I'm a product designer with a knack for simplicity.</HeroText>
      </HeroContainer>

      <WidthWrapper small>
        <HeroIntro>
          <p>
            Hi, I'm a digital user experience designer with over 7 years of
            experience. I have an engineering background and worked as a
            developer before transitioning into UX.
          </p>
        </HeroIntro>
      </WidthWrapper>
    </Wrapper>
  )
}

export default Hero
