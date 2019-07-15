import React from 'react'
import styled from 'styled-components'
import StickyTitle from './StickyTitle'

import WidthWrapper from './WidthWrapper'

import img100 from '../img/portfolio/100a-home.png'
import imgFf from '../img/portfolio/ff-home.jpg'

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
`
const PortfolioWrapper = styled.div`
  scroll-snap-type: x proximity;
  text-align: left;
  height: 70vh;
  margin-top: 1rem;
  margin-left: calc((100vw - 900px + 2rem) / 2);
  display: flex;
  overflow-x: scroll;

  ::-webkit-scrollbar {
    height: 1rem;
    background-color: ${props => props.theme.colors.lighterGrey};
    border-radius: 1rem;
  }
  ::-webkit-scrollbar-thumb {
    background: ${props => props.theme.colors.grey};
    border-radius: 1rem;
  }
`
const PortfolioItem = styled.div`
  height: 100%;
  scroll-snap-align: start;
  flex: 0 0 40rem;
  padding: 0 1rem 1rem;
  position: relative;

  &:not(:last-of-type):after {
    content: '';
    position: absolute;
    height: 50%;
    width: 4px;
    top: 50%;
    right: 0;
    background: ${props => props.theme.colors.primaryLight};
    transform: translateY(-50%);
  }
  &:last-of-type {
    margin-right: 4rem;
  }
`
const PImage = styled.img`
  width: 100%;
  height: 65%;
  object-fit: contain;
`
const PName = styled.div`
  font-family: ${props => props.theme.fonts.heading};
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: -0.25em;
`
const PCategory = styled.div`
  font-size: 1.25rem;
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
          <PortfolioItem>
            <PImage src={item.image} />
            <PName>{item.name}</PName>
            <PCategory>{item.category}</PCategory>
            <PDescription>{item.description}</PDescription>
          </PortfolioItem>
        ))}
      </PortfolioWrapper>
    </OuterWrapper>
  </div>
)

export default Portfolio
