import * as React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  > * {
    outline: 1px solid red;
  }
`
const HeroTitle = styled.h1`
  font-size: 4rem;
  color: ${props => props.theme.colors.primary};
`
const HeroAbout = styled.div`
  font-size: 2.5rem;
`

const Hero = () => (
  <Wrapper>
    <HeroTitle>Charles Wu</HeroTitle>
    <HeroAbout>UX Engineer</HeroAbout>
  </Wrapper>
)

export default Hero
