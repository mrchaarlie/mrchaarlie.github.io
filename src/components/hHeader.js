import * as React from 'react'
import styled from 'styled-components'
import { Link } from 'components/Router'
import IAmA from 'components/IAmA'
import WidthWrapper from 'components/WidthWrapper'

const Wrapper = styled.header`
  padding: 1rem 0;

  > * {
    outline: 1px solid red;
  }
`
const Logo = styled.div`
  padding: 1rem;
`
const ScrollingAbout = styled.div`
  padding: 1rem;
`

const Header = () => (
  <Wrapper>
    <WidthWrapper>
    <Logo />
    <nav>
      <Link to="/">Home</Link>
      <Link to="/portfolio">Portfolio</Link>
      <Link to="#resume">Resume</Link>
    </nav>

    <ScrollingAbout>
      <IAmA />
    </ScrollingAbout>
    </WidthWrapper>
  </Wrapper>
)

export default Header
