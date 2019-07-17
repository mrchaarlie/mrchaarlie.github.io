import React from 'react'
import styled from 'styled-components'
import StickyTitle from './StickyTitle'

import WidthWrapper from './WidthWrapper'

import img100 from '../img/portfolio/100a-home.png'
import imgFf from '../img/portfolio/ff-home.jpg'
import BorderTopLeft from './common/BorderTopLeft'
import BorderBottomLeft from './common/BorderBottomLeft'

const portfolioData = {
  oneHundredAccelerator: {
    name: '100+ Accelerator',
    category: 'Accelerator Website',
    image: img100,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore, ea.',
  },
  femaleFunders: {
    name: 'Female Funders',
    category: 'Education Website',
    image: imgFf,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore, ea.',
  },
  agileBlockchain: {
    name: 'Agile Blockchain Corporation',
    category: 'Logistic App',
    image: imgFf,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore, ea.',
  },
  careerJsm: {
    name: 'CareerJSM',
    category: 'Job Management App',
    image: imgFf,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore, ea.',
  },
  diveNetworks: {
    name: 'Dive Networks',
    category: 'Digital Signage App',
    image: imgFf,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore, ea.',
  },
  netflixLogo: {
    name: 'Netflix Logo',
    category: 'CSS Experiment',
    image: imgFf,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore, ea.',
  },
  crowdCurio: {
    name: 'Crowd Curio',
    category: 'Citizen Science Platform',
    image: imgFf,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore, ea.',
  },
  uberEverything: {
    name: 'Uber Everything',
    category: 'Design Challenge',
    image: imgFf,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore, ea.',
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
  height: 50vh;
  min-height: 26rem;
  margin-top: 1rem;
  margin-left: 1rem;
  overflow-x: scroll;
  display: flex;
  background-color: ${props => props.theme.colors.lighterGrey};

  @media screen and (min-width: ${props => props.theme.screens.small}) {
    height: 70vh;
    margin-left: ${MED_LEFT_MARGIN};
  }

  ::-webkit-scrollbar {
    height: 16px;
    background-color: transparent;
  }
  ::-webkit-scrollbar-thumb {
    background: ${props => props.theme.colors.grey};
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
    margin-right: 2rem;
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
`
const PImage = styled.img`
  width: 100%;
  height: 40%;
  object-fit: contain;

  @media screen and (min-width: ${props => props.theme.screens.small}) {
    height: 60%;
  }
`
const PName = styled.div`
  font-family: ${props => props.theme.fonts.heading};
  font-size: 1.75rem;
  font-weight: 700;
  line-height: 1.15;
  color: ${props => props.theme.colors.darkGrey};

  @media screen and (min-width: ${props => props.theme.screens.medium}) {
    font-size: 2.25rem;
  }
`
const PCategory = styled.div`
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
  color: ${props => props.theme.colors.darkGrey};
`
const PDescription = styled.p``

const Portfolio = () => (
  <div>
    <WidthWrapper>
      <StickyTitle>Portfolio</StickyTitle>
    </WidthWrapper>

    <OuterWrapper>
      <PortfolioWrapper>
        {Object.values(portfolioData).map(item => (
          <PortfolioInnerWrapper>
            <PortfolioItem>
              <PImage src={item.image} />
              <PName>{item.name}</PName>
              <PCategory>{item.category}</PCategory>
              <PDescription>{item.description}</PDescription>
            </PortfolioItem>
          </PortfolioInnerWrapper>
        ))}
      </PortfolioWrapper>
      <PortfolioBorderRadiusTL size="20" />
      <PortfolioBorderRadiusBL size="10" />
    </OuterWrapper>
  </div>
)

export default Portfolio
