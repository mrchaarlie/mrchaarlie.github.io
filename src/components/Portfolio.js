import React, { useState, useEffect, useRef } from 'react'
import { Link } from 'components/Router'
import styled from 'styled-components'
import StickyTitle from './StickyTitle'

import WidthWrapper from './WidthWrapper'

import img100 from '../img/portfolio/100a.png'
import imgABC from '../img/portfolio/abc.png'
import imgCareerJSM from '../img/portfolio/careerjsm.png'
import imgCurio from '../img/portfolio/curio.jpg'
import imgDive from '../img/portfolio/dive.jpg'
import imgFF from '../img/portfolio/ff.jpg'
import imgNetflix from '../img/portfolio/netflix.png'
import imgUberEverything from '../img/portfolio/uber-everything.jpg'

import leftArrow from '../img/left-arrow.svg'
import rightArrow from '../img/right-arrow.svg'

import BorderTopLeft from './common/BorderTopLeft'
import BorderBottomLeft from './common/BorderBottomLeft'

const portfolioData = {
  oneHundredAccelerator: {
    title: '100+ Accelerator',
    category: 'Accelerator Website',
    image: img100,
    keywords:
      'Interface Design | Copywriting | Branding | Development',
    linkTo: '/'
  },
  femaleFunders: {
    title: 'Female Funders',
    category: 'Education Website',
    image: imgFF,
    keywords:
      'Information Architecture | Branding | SEO | Accessibility/Responsive Design | Development',
    linkTo: '/'
  },
  agileBlockchain: {
    title: 'Agile Blockchain Corporation',
    category: 'Logistic App',
    image: imgABC,
    keywords:
      'UX Research | Information Architecture | Interface Design | Prototyping',
    linkTo: '/'
  },
  careerJsm: {
    title: 'CareerJSM',
    category: 'Job Management App',
    image: imgCareerJSM,
    keywords:
      'Interface Design | User Interviews | User Research | Copywriting | Branding | Development',
    linkTo: '/'
  },
  diveNetworks: {
    title: 'Dive Networks',
    category: 'Digital Signage App',
    image: imgDive,
    keywords:
      'Responsive/Interaction Design | User Research | Branding | Development',
    linkTo: '/'
  },
  netflixLogo: {
    title: 'Netflix Logo',
    category: 'CSS Experiment',
    image: imgNetflix,
    keywords:
      'Motion Design',
    linkTo: '/'
  },
  crowdCurio: {
    title: 'Crowd Curio',
    category: 'Citizen Science Platform',
    image: imgCurio,
    keywords:
      'User Research | User Interviews | Interface Design | Prototyping | Development',
    linkTo: '/'
  },
  uberEverything: {
    title: 'Uber Everything',
    category: 'Design Challenge',
    image: imgUberEverything,
    keywords:
      'UX Design | Product Design',
    linkTo: '/'
  },
}

const MED_LEFT_MARGIN = 'calc((100vw - 900px + 2rem) / 2)'

const OuterWrapper = styled.div`
  overflow-x: visible;
  position: relative;
`

const PortfolioWrapper = styled.div`
  scroll-snap-type: x proximity;
  text-align: left;
  position: relative;
  height: 60vh;
  min-height: 26rem;
  margin-top: 1rem;
  margin-left: 1rem;
  overflow-x: scroll;
  display: flex;
  background-color: ${props => props.theme.colors.lighterGrey};
  scrollbar-color: ${props => `${props.theme.colors.darkGrey} ${props.theme.colors.lighterGrey}`};

  @media screen and (min-width: ${props => props.theme.screens.small}) {
    height: 70vh;
    max-height: 30rem;
  }
  @media screen and (min-width: ${props => props.theme.screens.medium}) {
    margin-left: ${MED_LEFT_MARGIN};
  }

  ::-webkit-scrollbar {
    height: 16px;
    background-color: transparent;
  }
  ::-webkit-scrollbar-thumb {
    background: ${props => props.theme.colors.darkGrey};
    border-radius: 16px;
  }
`
// Faux border radius because real one causes performance problems
const PortfolioBorderRadius = styled.div`
  position: absolute;
  height: ${props => `${props.size || 16}px`};
  width: ${props => `${props.size || 16}px`};
  background: ${props => props.theme.colors.white};
  pointer-events: none;
  left: 1rem;

  @media screen and (min-width: ${props => props.theme.screens.medium}) {
    left: ${MED_LEFT_MARGIN};
  }
`
const _PortfolioBorderRadiusTL = styled(PortfolioBorderRadius)`
  top: 0;
  clip-path: url(#maskTopLeft);
`
const _PortfolioBorderRadiusBL = styled(PortfolioBorderRadius)`
  bottom: 0;
  clip-path: url(#maskBottomLeft);
`
const PortfolioBorderRadiusTL = ({ size, clipId }) => (
  <>
    <BorderTopLeft size={size} clipId="maskTopLeft" />
    <_PortfolioBorderRadiusTL size={size} />
  </>
)

const PortfolioBorderRadiusBL = ({ size, clipId }) => (
  <>
    <BorderBottomLeft size={size} clipId="maskBottomLeft" />
    <_PortfolioBorderRadiusBL size={size} />
  </>
)

const PortfolioInnerWrapper = styled.div`
  scroll-snap-align: start;
  flex: 0 0 90vw;

  &:last-of-type {
    padding-right: calc((100vw - 900px - 2rem) / 2);
  }

  @media screen and (min-width: ${props => props.theme.screens.medium}) {
    flex: 0 0 45rem;
    padding-right: 2rem;
  }
`
const PortfolioItem = styled.div`
  background: ${props => props.theme.colors.white};
  border-radius: 12px;
  margin: 0.5rem;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);
  padding: 1rem 2rem;
  height: calc(100% - 3rem);
  position: relative;
  display: flex;
  flex-direction: column;
  text-align: center;
`
const PImage = styled.img`
  max-width: 90%;
  max-height: 50%;
  margin-left: auto;
  margin-right: auto;
  flex: 0 1 50%;
  object-fit: contain;

  @media screen and (min-width: ${props => props.theme.screens.small}) {
    max-height: 60%;
  }
`
const PBody = styled.div`
  flex: 1 0 40%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
`
const PTitle = styled.div`
  margin-top: 0.75rem;
  margin-bottom: 0.25rem;
  font-family: ${props => props.theme.fonts.heading};
  font-size: 1.75rem;
  font-weight: 700;
  line-height: 1.15;
  color: ${props => props.theme.colors.primary};

  @media screen and (min-width: ${props => props.theme.screens.medium}) {
    font-size: 2.25rem;
  }
`
const PCategory = styled.div`
  font-size: 1.125rem;
  margin-bottom: 0.75rem;
  color: ${props => props.theme.colors.darkGrey};
`
const PKeywords = styled.p`
  font-size: 0.75rem;
  margin-bottom: 1rem;
  color: ${props => props.theme.colors.grey};
`
const PLink = styled(Link)`
  background: ${props => props.theme.colors.secondary};
  color: ${props => props.theme.colors.white};
  padding: 0.375rem 2rem;
  border-radius: 2rem;
  text-decoration: none;
`

const ScrollButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 10;
  width: 2rem;
  height: 4rem;
  margin: 0;
  padding: 0;
  border-radius: 1rem;
  background-color: rgba(0, 0, 0, 0.4);
  background-size: 1rem;
  background-repeat: no-repeat;
  background-position: 50% 50%;
  color: ${props => props.theme.colors.white};
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: ${props => props.disabled ? 0.1 : 1};
  transition: background 0.25s ease-out, box-shadow 0.25s ease-out, opacity 0.25s ease-out;
  border: 0;

  &:hover:not(:disabled),
  &:focus:not(:disabled) {
    background-color: rgba(0, 0, 0, 0.8);
    box-shadow: 0 0 1px 1px #fff, 0 0 3px 3px ${props => props.theme.colors.primary};
    outline: 0;
  }

  &:disabled {
    cursor: default;
  }

`

const PrevButton = styled(ScrollButton)`
  left: 1.25rem;
  background-image:url(${leftArrow});

  @media screen and (min-width: ${props => props.theme.screens.medium}) {
    left: calc(${MED_LEFT_MARGIN} + 0.25rem);
  }
`

const NextButton = styled(ScrollButton)`
  right: 1rem;
  background-image:url(${rightArrow});
`

const Portfolio = () => {
  const [portfolioScrollPos, setPortfolioScrollPos] = useState(0)
  const [portfolioItemWidth, setPortfolioItemWidth] = useState(900)
  const [portfolioItems, setPortfolioItems] = useState(8)
  const [prevButtonEnabled, setPrevButtonEnabled] = useState(false)
  const [nextButtonEnabled, setNextButtonEnabled] = useState(true)
  const portfolioWrapperRef = useRef(null)
  const PORTFOLIO_MIN_WIDTH = 0
  let PORTFOLIO_MAX_WIDTH = portfolioItemWidth * (portfolioItems - 1)

  let portfolioEl = null

  const scrollPortfolioTo = (position) => {
    portfolioEl.scroll({
      top: 0,
      left: position,
      behavior: 'smooth'
    });
  }

  const nextItem = () => {
    if (portfolioScrollPos < PORTFOLIO_MAX_WIDTH) {
      const newPos = portfolioScrollPos + portfolioItemWidth
      scrollPortfolioTo(newPos)
    }
  }
  const prevItem = () => {
    if (portfolioScrollPos > PORTFOLIO_MIN_WIDTH) {
      const newPos = portfolioScrollPos - portfolioItemWidth
      scrollPortfolioTo(newPos)
    }
  }

  // init
  useEffect(() => {
    portfolioEl = portfolioWrapperRef.current
    setPortfolioItems(portfolioEl.children.length)
    setPortfolioItemWidth(portfolioEl.firstElementChild.offsetWidth)
    PORTFOLIO_MAX_WIDTH = portfolioItemWidth * (portfolioItems - 1)

    portfolioEl.addEventListener('scroll', () => {
      setPortfolioScrollPos(portfolioEl.scrollLeft)
    })

  })

  // update Next Button  
  useEffect(() => {
    if (portfolioEl.scrollLeft >= PORTFOLIO_MAX_WIDTH) {
      setNextButtonEnabled(false)
    } else {
      const timer = setTimeout(() => {
        setNextButtonEnabled(true)
      }, 20)
      return () => clearTimeout(timer)
    }
  })
  // update Prev Button  
  useEffect(() => {
    if (portfolioEl.scrollLeft <= PORTFOLIO_MIN_WIDTH) {
      setPrevButtonEnabled(false)
    } else {
      const timer = setTimeout(() => {
        setPrevButtonEnabled(true)
      }, 20)
      return () => clearTimeout(timer)
    }
  })

  return (
    <>
      <WidthWrapper>
        <StickyTitle>Portfolio</StickyTitle>
      </WidthWrapper>

      <OuterWrapper>
        <PrevButton onClick={prevItem} disabled={!prevButtonEnabled} />
        <NextButton onClick={nextItem} disabled={!nextButtonEnabled} />
        <PortfolioWrapper ref={portfolioWrapperRef}>

          {Object.values(portfolioData).map(item => (
            <PortfolioInnerWrapper key={item.title} >
              <PortfolioItem>
                <PImage src={item.image} />
                <PBody>
                  <PTitle>{item.title}</PTitle>
                  <PCategory>{item.category}</PCategory>
                  <PKeywords>{item.keywords}</PKeywords>
                  <PLink to={item.linkTo}>Read details</PLink>
                </PBody>
              </PortfolioItem>
            </PortfolioInnerWrapper>
          ))}
        </PortfolioWrapper>
        <PortfolioBorderRadiusTL size="20" />
        <PortfolioBorderRadiusBL size="10" />
      </OuterWrapper>
    </>
  )
}

export default Portfolio
