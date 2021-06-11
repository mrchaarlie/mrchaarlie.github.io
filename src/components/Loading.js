import * as React from 'react'
import styled from 'styled-components'

const ANIMATION_DURATION = '5s'

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`

const Ripple = styled.div`
  width: 0rem;
  height: 0rem;
  border-radius: 100%;
  transition: all 0.25s;
  position: absolute;
  
  transform: rotate3d(1, 0, 0, 80deg) translateY(100vh);
  border: 3rem solid ${props => props.theme.colors.offWhite};
  animation: ripple ${ANIMATION_DURATION} ease 0s infinite;


  @keyframes ripple {
    0% {
      opacity: 0.2;
      width 0rem;
      height: 0rem;
      border: 0;
    }
    8% {
      opacity: 0.2;
      width 0rem;
      height: 0rem;
      border: 0;
    }
    11% {
      border: 4rem solid ${props => props.theme.colors.secondaryLight};
    }
    50% {
      opacity: 0.2;
      width: 70vw;
      height: 70vw;
      border: 0.2rem solid ${props => props.theme.colors.secondaryLight};
    }
    100% {
      opacity: 0;
      width: 71vw;
      height: 71vw;
      border: 0rem solid ${props => props.theme.colors.secondaryLight};
    }
  }
`

const Ball = styled.div`
  width: 1rem;
  height: 1.25rem;
  background: ${props => props.theme.colors.primary};
  position: absolute;
  border-radius: 50%;
  animation: balldrop ${ANIMATION_DURATION} linear 0s infinite;

  @keyframes balldrop {
    0% {
      transform: translate3d(0, -50vh, 0) rotate3d(0, 0, 0, 90deg);
      opacity: 1;
    }
    8.5% {
      transform: translate3d(0, 15vh, 0) rotate3d(0, 0, 0, 90deg);
      opacity: 1;
    }
    9% {
      transform: translate3d(0, 15vh, 0) rotate3d(1, 0, 0, 90deg);
      opacity: 0;
    }
    100% {
      transform: translate3d(0, 8vh, 0) rotate3d(1, 0, 0, 90deg);
      opacity: 0;
    }
  }
`
const Loading = () => (
  <Wrapper>
    <Ripple />
    <Ball />
  </Wrapper>
)

export default Loading
