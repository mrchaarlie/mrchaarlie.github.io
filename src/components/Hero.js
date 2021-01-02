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
const HeroIntro = styled.h4`
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

const RightArrow1 = styled(_RightArrow)`
  width: 1.125em;
  height: 1.125em;
  margin: 0 0 -0.25em 0.125em;
  color: ${props => props.theme.colors.primaryDark};
`

const ARROW_POSITION_BEFORE = 40;
const ARROW_POSITION_AFTER = 25;
const RightArrow = styled.div`
  position: relative;
  display: inline-block;
  width: 0.75em;
  height: 0.75em;
  margin: 0 0 -0.05em 0.125em;
  border-radius: 2em;
  border: 2px solid${props => props.theme.colors.primaryDark};
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
    top: calc( 50% - 0.5px );
    transition: all 0.25s ${props => props.theme.easings.easeOutQuad};
  }

  // arrow point
  &:after {
    content: '';
    display: block;
    width: 30%;
    height: 30%;
    position: absolute;
    top: 50%;
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
        right: calc( ${ARROW_POSITION_AFTER}% + 0.5px );
        border-color:  ${props => props.theme.colors.white};
      }

      // arrow point
      &:after {
        content: '';
        right: ${ARROW_POSITION_AFTER}%;
        transform: translateY(-50%) rotate(-45deg);
        border-color:  ${props => props.theme.colors.white};
      }
    }

  }
`

const Hero = () => {

  return (
    <Wrapper>
    
      <Header />
  
     <WidthWrapper>
      <HeroContainer id="Hero-Title" >
        <HeroText>Hi, I'm Charles. <WaveEmoji>👋</WaveEmoji><br />
        I'm a product designer.</HeroText>
      </HeroContainer>
      </WidthWrapper>

      <WidthWrapper>
        <HeroIntro>
            Currently, I’m at LivePerson building the future of conversational commerce. <br /><br />
            <WorkLink href="#work"> Check out some of my work <RightArrow  /></WorkLink>
        </HeroIntro>


      </WidthWrapper>
    </Wrapper>
  )
}

export default Hero
