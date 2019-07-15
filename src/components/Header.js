import * as React from 'react'
import styled from 'styled-components'
import { Link } from './Router'
import IAmA from './IAmA'
import WidthWrapper from './WidthWrapper'

import logoMask from '../img/logo-mask-purple.svg'

const getAnimationStyle = ({ isVisible, fadeOut }) => {
  const animationName = isVisible ? 'fadeInDown' : fadeOut ? 'fadeOut' : 'none'

  return isVisible
    ? `fadeInDown 0.5s cubic-bezier(0.17, 0.84, 0.44, 1) 0s forwards`
    : fadeOut
    ? `fadeOut 0.2s ease-out 0s forwards`
    : 'none'
}

const Wrapper = styled.header`
  position: fixed;
  z-index: 9999;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  width: 100vw;
  height: ${props => props.theme.heights.header};
  background: ${props => props.theme.colors.nav};
  opacity: ${props => (props.fadeOut || props.isVisible ? '1' : '0')};
  animation: ${props =>
    getAnimationStyle({
      isVisible: props.isVisible,
      fadeOut: props.fadeOut,
    })};
  ${props => props.disabled && 'display: none; visibility: none'};
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

const Header = ({ isVisible, fadeOut, disabled }) => (
  <Wrapper isVisible={isVisible} fadeOut={fadeOut} disabled={disabled}>
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
