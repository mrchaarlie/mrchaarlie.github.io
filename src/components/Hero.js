import * as React from 'react'
import styled from 'styled-components'
import WidthWrapper from 'components/WidthWrapper'

const Wrapper = styled.div`
  margin: 4rem 0;

  @media screen and (min-width: ${props => props.theme.screens.medium}) {
    margin: 8rem 0;
  }
`

const HeroTitle = styled.div`
  text-align: center;
  padding: 0 1rem;
  margin-bottom: 2rem;

  animation: zoomOut 1s cubic-bezier(0.17, 0.84, 0.44, 1) 0s forwards;

  @keyframes zoomOut {
    0% {
      opacity: 0;
    }
    10% {
      opacity: 0;
      transform: scale(1.5);
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
  font-size: 2.5rem;
  color: ${props => props.theme.colors.darkGrey};
  position: relative;
  margin-top: -0.75rem;
  z-index: 1;
  opacity: 0;
  animation: slideInDown 1s cubic-bezier(0.17, 0.84, 0.44, 1) 1s forwards;

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
    animation: slideOutDown 0.8s cubic-bezier(0.17, 0.84, 0.44, 1) 1.2s forwards;
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

const Hero = () => (
  <Wrapper>
    <HeroTitle>
      <Name>Charles Wu</Name>
      <Title>UX Engineer</Title>
    </HeroTitle>


    <WidthWrapper small>
      <HeroIntro>
        <p>
          Hi! I'm a product designer/developer with 7+ years of experience in building digital products. I'm good at asking the right questions, and then finding out the answers—which is what I've been doing at Highline Beta for the past year.
      </p>
        <p>
          Building successful products is a continuous journey where I validate problems, solutions, and then execute on delivery. With my technical knowledge in front-end dev, I can work closely and efficiently with various roles to deliver value.
        </p></HeroIntro>
    </WidthWrapper>
  </Wrapper>

)


// I’m a product designer with a penchant for asking good questions. For the past year or so, I’ve been working at Dropbox on the Paper team. Before that, I studied systems design engineering and urban planning at University of Waterloo.

// Weaving myself through the design process energizes me—the whole damn thing. I thrive in ambiguous problem spaces; I get a thrill out of throwing my worst ideas on the table; and I push pixels with a purpose.

export default Hero
