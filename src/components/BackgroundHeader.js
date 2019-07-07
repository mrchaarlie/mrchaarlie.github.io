import * as React from 'react'
import styled from 'styled-components'
import { Link } from 'components/Router'
import WidthWrapper from 'components/WidthWrapper'

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: ${props => props.theme.heights.header};
  display: flex;
  align-items: center;
  text-align: right;
`
const Nav = styled.nav`
  a {
    display: inline-block;
    margin-left: 1rem;
  }
`
const BackgroundHeader = ({ isVisible, fadeOut }) => (
  <Wrapper>
    <WidthWrapper>
      <Nav>
        <Link to="/portfolio">Portfolio</Link>
        <Link to="#resume">Resume</Link>
      </Nav>
    </WidthWrapper>
  </Wrapper>
)

export default BackgroundHeader
