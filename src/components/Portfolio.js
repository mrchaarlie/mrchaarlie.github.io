import React from 'react'
import styled from 'styled-components'
import StickyTitle from 'components/StickyTitle'

import WidthWrapper from 'components/WidthWrapper'

const PortfolioWrapper = styled.div`
  scroll-snap-type: x proximity;
  text-align: left;
  min-height: 70vh;
  margin-top: 1rem;
  margin-left: calc((100vw - 900px + 2rem) / 2);
  display: grid;
  grid-template-columns: repeat(4, 40rem);
  grid-template-rows: none;
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
  width: 40rem;
  flex: 0 0 40rem;
  display: inline-block;
  outline: 1px solid red;
  scroll-snap-align: start;
`
const PImage = styled.img``
const PTitle = styled.div``
const PDescription = styled.p``

const Portfolio = () => (
  <div>
    <WidthWrapper>
      <StickyTitle>Portfolio</StickyTitle>
    </WidthWrapper>

    <PortfolioWrapper>
      <PortfolioItem>
        <PImage></PImage>
        <PTitle>Title 1</PTitle>
        <PDescription>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam, ea!
        </PDescription>
      </PortfolioItem>
      <PortfolioItem>
        <PImage></PImage>
        <PTitle>Title 2</PTitle>
        <PDescription>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam, ea!
        </PDescription>
      </PortfolioItem>
      <PortfolioItem>
        <PImage></PImage>
        <PTitle>Title 3</PTitle>
        <PDescription>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam, ea!
        </PDescription>
      </PortfolioItem>
      <PortfolioItem>
        <PImage></PImage>
        <PTitle>Title 4</PTitle>
        <PDescription>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam, ea!
        </PDescription>
      </PortfolioItem>
    </PortfolioWrapper>
  </div>
)

export default Portfolio
