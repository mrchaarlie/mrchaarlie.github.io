import React, { useState, useEffect, useRef } from 'react'
import styled from 'styled-components'
import BackgroundHeader from 'components/BackgroundHeader'
import Header from 'components/Header'
import WidthWrapper from 'components/WidthWrapper'

const Wrapper = styled.div`
  margin: 4rem 0;

  @media screen and (min-width: ${props => props.theme.screens.medium}) {
    margin: 7rem 0;
  }
`

const TITLE_ANIM_DURATION = 0.7

const HeroTitle = styled.div`
  text-align: center;
  padding: 0 1rem;
  margin-bottom: 6rem;

  animation: zoomOut ${TITLE_ANIM_DURATION}s cubic-bezier(0.17, 0.84, 0.44, 1)
    0s forwards;

  @keyframes zoomOut {
    0% {
      opacity: 0;
    }
    10% {
      opacity: 0;
      transform: scale(1.25);
    }
    100% {
      transform: scale(1);
      opacity: 1;
    }
  }
`
const Name = styled.h1`
  position: relative;
  z-index: 10;
  font-size: 3rem;
  color: ${props => props.theme.colors.primary};
  margin-bottom: 0.5rem;
  background: rgb(255, 255, 255);
  background: linear-gradient(
    0deg,
    rgba(255, 255, 255, 0) 0%,
    rgba(255, 255, 255, 1) 20%,
    rgba(255, 255, 255, 1) 100%
  );

  @media screen and (min-width: ${props => props.theme.screens.medium}) {
    font-size: 4rem;
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

  @keyframes slideInDown {
    0% {
      transform: translateY(-4rem);
      opacity: 1;
    }
    100% {
      transform: translateY(0);
      opacity: 1;
    }
  }
`
const HeroIntro = styled.div`
  position: relative;

  &:after {
    content: '';
    pointer-events: none;
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    background: #fff;
    animation: slideOutDown 1.2s cubic-bezier(0.17, 0.84, 0.44, 1)
      ${TITLE_ANIM_DURATION + 0.35}s forwards;
  }

  @keyframes slideOutDown {
    0% {
      height: 100%;
    }
    100% {
      height: 0%;
    }
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

  const showNavBar = () => {
    setNavBarVisible(true)
    setNavBarDisabled(false)
  }

  const hideNavBar = () => {
    navBarVisible && setNavBarFadeOut(true)
    setNavBarVisible(false)
  }

  useEffect(() => {
    window.addEventListener('scroll', () => setScrollPos(window.scrollY))

    // disable the Navbar after it transitions out.

    if (heroTitleRef.current.getBoundingClientRect().bottom < 16) {
      showNavBar()
    } else {
      hideNavBar()

      const navTimer = setTimeout(() => {
        setNavBarDisabled(true)
      }, 200)
      return () => clearTimeout(navTimer)
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

      <HeroTitle id="HeroTitle" ref={heroTitleRef}>
        <Name>Charles Wu</Name>
        <Title>UX Engineer</Title>
      </HeroTitle>

      <WidthWrapper small>
        <HeroIntro>
          <p>
            Hi, I'm a problem solver that focuses on designing, developing, and
            building experiences.
          </p>
          <p>
            My 7+ years of experience in designing digital products has been
            fuelled by my love of technology. The past several companies I've
            worked at have been startups, where I've used lean methodologies and
            workflows to maximize impact and efficiency.
          </p>
        </HeroIntro>
      </WidthWrapper>
    </Wrapper>
  )
}

export default Hero
