import React from 'react'
import styled from 'styled-components'
import StickyTitle from './StickyTitle'

import WidthWrapper from './WidthWrapper'

import img100 from '../img/portfolio/100a-home.png'
import imgFf from '../img/portfolio/ff-home.jpg'
import BorderTopLeft from './common/BorderTopLeft'

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

const OuterWrapper = styled.div`
  overflow-x: visible;
  position: relative;
`

const PortfolioWrapper = styled.div`
  scroll-snap-type: x proximity;
  text-align: left;
  position: relative;
  height: 70vh;
  min-height: 26rem;
  margin-top: 1rem;
  margin-left: calc((100vw - 900px + 2rem) / 2);
  overflow-x: scroll;
  display: flex;
  background-color: ${props => props.theme.colors.lighterGrey};
  /*border-radius: 1.125rem 0 0.5rem 0.5rem;*/

  ::-webkit-scrollbar {
    height: 1rem;
    background-color: transparent;
  }
  ::-webkit-scrollbar-thumb {
    background: ${props => props.theme.colors.grey};
    border-radius: 1rem;
  }
`
// Faux border radius because real one causes performance problems
const PortfolioBorderRadius = styled.div`
  position: absolute;
  top: 0;
  left: calc((100vw - 900px + 2rem) / 2);
  height: 1rem;
  width: 1rem;
  background: ${props => props.theme.colors.white};
  clip-path: url(#mask);
`
const PortfolioInnerWrapper = styled.div`
  flex: 0 0 45rem;
  scroll-snap-align: start;
  margin-right: 2rem;

  &:last-of-type {
    margin-right: calc((100vw - 900px) / 2);

    &:after {
      content: '';
    }
  }
`
const PortfolioItem = styled.div`
  background: ${props => props.theme.colors.white};
  border-radius: 0.75rem;
  margin: 0.5rem;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);
  padding: 1rem 2rem;
  height: calc(100% - 3rem);
  position: relative;
`
const PImage = styled.img`
  width: 100%;
  height: 60%;
  object-fit: contain;
`
const PName = styled.div`
  font-family: ${props => props.theme.fonts.heading};
  font-size: 2.5rem;
  font-weight: 700;
  line-height: 1.15;
  color: ${props => props.theme.colors.darkGrey};
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
        <BorderTopLeft />
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
      <PortfolioBorderRadius />
    </OuterWrapper>
  </div>
)

export default Portfolio
