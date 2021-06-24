import * as React from 'react'
import styled from 'styled-components'
import WidthWrapper from './WidthWrapper'

const FOOTER_HEIGHT = `8rem`

const Wrapper = styled.footer`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100vw;
  height: ${FOOTER_HEIGHT};
  background: ${props => props.theme.colors.white};
  z-index: 1;
  text-align: right;

  &:before {
    content: '';
    display: block;
    height: 0.25rem;
    width: 100%;
    background: linear-gradient(
      173deg,
      ${props => props.theme.colors.primary} 15%,
      ${props => props.theme.colors.secondary} 50%
    );
  }
`

const Container = styled.div`
  padding: 2rem 0;
`
const SocialLinkWrapper = styled.div`
  margin-bottom: 1rem;

  a {
    display: inline-block;
  }
  a:not(:last-of-type) {
    margin-right: 1rem;
  }
`
const MadeIn = styled.div`
  font-size: 0.75em;
`

const SocialLinks = () => (
  <SocialLinkWrapper>
    <a href="https://www.linkedin.com/in/mrchaarlie">LinkedIn</a>
    <a href="https://twitter.com/MrChaarlie">Twitter</a>
    <a href="https://github.com/mrchaarlie">GitHub</a>
    <a href="https://dribbble.com/mrchaarlie">Dribble</a>
    <a href="https://ux.stackexchange.com/users/51594/mrchaarlie">
      Stack Exchange
    </a>
  </SocialLinkWrapper>
)
const Footer = () => (
  <Wrapper id="footer">
    <Container>
      <WidthWrapper>
        <SocialLinks />
        <MadeIn>Made with &lt; /&gt; by Charlie, 2021</MadeIn>
      </WidthWrapper>
    </Container>
  </Wrapper>
)

export { Footer, FOOTER_HEIGHT }
