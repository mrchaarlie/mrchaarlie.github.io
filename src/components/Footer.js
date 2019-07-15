import * as React from 'react'
import styled from 'styled-components'
import WidthWrapper from './WidthWrapper'

const Wrapper = styled.footer`
  padding: 1rem 0;
`

const SocialLinkWrapper = styled.div`
  margin-bottom: 1rem;

  a {
    display: inline-block;
    margin-right: 1rem;
  }
`
const MadeIn = styled.div`
  font-size: 12px;
`

const SocialLinks = () => (
  <SocialLinkWrapper>
    <a href="#">LinkedIn</a>
    <a href="#">GitHub</a>
    <a href="#">Dribble</a>
    <a href="#">Twitter</a>
    <a href="#">Easter Egg</a>
  </SocialLinkWrapper>
)
const Footer = () => (
  <Wrapper>
    <WidthWrapper>
      <SocialLinks />
      <MadeIn>Made with ♥ by Charlie, in Toronto, Canada.</MadeIn>
    </WidthWrapper>
  </Wrapper>
)

export default Footer
