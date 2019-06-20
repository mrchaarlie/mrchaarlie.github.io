import * as React from 'react'
import styled from 'styled-components'
import { Link } from 'components/Router'
import IAmA from 'components/IAmA'
import WidthWrapper from 'components/WidthWrapper'

import logoMask from '../img/logo-mask.svg'

const Wrapper = styled.header`
  position: fixed;
  display: flex;
  align-items: center;
  width: 100vw;
  height: ${props => props.theme.heights.header};
  background: ${props => props.theme.colors.white};

  > * {
    outline: 1px solid red;
  }
`
const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
const LogoText = styled.div`
  display: flex;
  align-items: center;
`
const LogoContainer = styled.div`
  position: relative;
  height: 3.5rem;
  width: 3.5rem;
  margin-right: 1rem;
`
const Logo = styled.img`
  position: relative  
  height: 100%;
  width: 100%;
  z-index: 10;
`
const LogoBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  margin: 5%;
  height: 90%;
  width: 90%;
  z-index: 1;
  background: ${props => props.theme.colors.primary};
`
const ScrollingAbout = styled.div`
  display: inline-block;
`
const Nav = styled.nav`
  a {
    display: inline-block;
    margin-left: 1rem;
  }
`

const Header = () => (
  <Wrapper>
    <WidthWrapper>
      <NavContainer>
        <LogoText>
          <LogoContainer>
            <Link to="/">
              <Logo src={logoMask} />
            </Link>
            <LogoBackground />
          </LogoContainer>
          <ScrollingAbout>
            <IAmA />
          </ScrollingAbout>
        </LogoText>

        <Nav>
          <Link to="/portfolio">Portfolio</Link>
          <Link to="#resume">Resume</Link>
        </Nav>
      </NavContainer>
    </WidthWrapper>
  </Wrapper>
)

export default Header
