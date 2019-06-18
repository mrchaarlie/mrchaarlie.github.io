import * as React from 'react'
import styled from 'styled-components'
import WidthWrapper from 'components/WidthWrapper'

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

const SocialLinks = () => (
  <SocialLinkWrapper>
    <a href="#">LinkedIn</a>
    <a href="#">GitHub</a>
    <a href="#">Dribble</a>
    <a href="#">Twitter</a>
    <a href="#">Easter Egg</a>
  </SocialLinkWrapper>
)
const Center = styled.div`
  // text-align: center;
`
const Footer = () => (
  <Wrapper>
    <WidthWrapper>
      <Center>
        
      <SocialLinks />
      <div>Made with ♥ by Charlie, in Toronto, Canada.</div>
      </Center>
    </WidthWrapper>
  </Wrapper>
)

export default Footer
