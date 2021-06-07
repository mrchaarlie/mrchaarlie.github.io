import React from 'react'
import ReactTooltip from 'react-tooltip'
import styled from 'styled-components'
import Header from './Header'
import WidthWrapper from './WidthWrapper'
import DashedUnderline from './DashedUnderline'

const Wrapper = styled.div`
  margin: 4rem 0;

  @media ${props => props.theme.media.medium} {
    margin: 4rem 0;
  }
`

const Intro = styled.div`
  min-height: 70vh;
  display: flex;
  flex-direction: columnn;
  align-items: center;
  animation: fadeInSlideDownSmall 0.5s ease-out;
`

const Title = styled.div`
  text-align: left;
  position: relative;
  margin-bottom: 4em;
  
`
const HeroText = styled.h2`
  position: relative;
  z-index: 150;
  color: ${props => props.theme.colors.primary};

  @supports (-webkit-background-clip: text) {
    background: linear-gradient(
      173deg,
      ${props => props.theme.colors.primary} 15%,
      ${props => props.theme.colors.secondary} 50%
    );
    background-attachment: fixed;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  @media ${props => props.theme.media.medium} {
  }
`
const Summary = styled.h4`
  position: relative;
`

const WaveEmoji = styled.span`
  -webkit-text-fill-color: #000;
  display: inline-block;
  opacity: 0;
  animation: fadeInSlideRight 0.5s ease-out 2s forwards;
`

const ARROW_POSITION_BEFORE = 40
const ARROW_POSITION_AFTER = 25
const RightArrow = styled.div`
  position: relative;
  display: inline-block;
  width: 0.75em;
  height: 0.75em;
  margin: 0 0 -0.125em 0.125em;
  border-radius: 2em;
  border: 2px solid ${props => props.theme.colors.primaryDark};
  transition: all 0.25s ${props => props.theme.easings.easeOutQuad};

  // arrow stem
  &:before {
    content: '';
    display: block;
    width: 3px;
    height: 0;
    right: 120%;
    position: absolute;
    border-top: 2px solid ${props => props.theme.colors.primaryDark};
    opacity: 0;
    top: calc(50% - 0.5px);
    transition: all 0.25s ${props => props.theme.easings.easeOutQuad};
  }

  // arrow point
  &:after {
    content: '';
    display: block;
    width: 30%;
    height: 30%;
    position: absolute;
    top: calc(50% + 0.5px);
    right: ${ARROW_POSITION_BEFORE}%;
    transform: translateY(-50%) rotate(-45deg);
    transition: all 0.25s ${props => props.theme.easings.easeOutQuad};
    border-right: 2px solid ${props => props.theme.colors.primaryDark};
    border-bottom: 2px solid ${props => props.theme.colors.primaryDark};
  }
`
const WorkLink = styled.a`
  transform: translateY(-50%) rotate(-45deg);
  color: inherit;
  text-decoration: none;

  &:hover,
  &:focus {
    pointer: cursor;

    ${RightArrow} {
      background: ${props => props.theme.colors.primaryDark};

      // arrow stem
      &:before {
        content: '';
        width: 50%;
        opacity: 1;
        right: calc(${ARROW_POSITION_AFTER}% + 1px);
        border-color: ${props => props.theme.colors.white};
      }

      // arrow point
      &:after {
        content: '';
        right: ${ARROW_POSITION_AFTER}%;
        transform: translateY(-50%) rotate(-45deg);
        border-color: ${props => props.theme.colors.white};
      }
    }
  }
`

const Tooltip = styled.p`
  padding-top: 0.25em;
  max-width: 25rem;
  font-size: 1rem;
  line-height: 1.2;
  color: ${props => props.theme.colors.white};
`

const HELLO_STRINGS = ["Hello","Hello","Hello","Hello","Hello","Hello","Hello","Hello","Hello","Bonjour","Hola", "Namaste", "Shalom", "Ni Hao"]

const RandomHello = () => {

}

const Hero = () => {

  return (
    <Wrapper>
      <Header />

      <Intro>
        <WidthWrapper>
          <Title id="title">
            <HeroText>
              Hi, I'm Charles. <WaveEmoji>👋</WaveEmoji>
              <br />
              I'm a product designer.
            </HeroText>
          </Title>

          <Summary>
            Currently, I’m at LivePerson building the future of {' '}
            <DashedUnderline
              data-tip
              data-for="conversationalCommerece"
              data-effect="solid"
              data-place="bottom"
              data-background-color="#000"
              data-delay-show="100">
              conversational commerce
            </DashedUnderline>
            . <br />
            <br />
            <WorkLink href="#work">
              Check out some of my work <RightArrow />
            </WorkLink>
            <ReactTooltip id="conversationalCommerece" >
                <Tooltip>Specifically, I'm helping enterprises understand their customers' needs via NLU-powered tools, so they can increase automation and improve customer engagement.</Tooltip>
                <Tooltip>
                  It's a complex industry; feel free to contact me to learn more! </Tooltip>
              </ReactTooltip>
          </Summary>
        </WidthWrapper>
      </Intro>
    </Wrapper>
  )
}

export default Hero
