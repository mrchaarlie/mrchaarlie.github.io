import * as React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { transparentize } from 'polished'
import { Link } from './Router'
import IAmA from './IAmA'
import WidthWrapper from './WidthWrapper'

import logo from '../img/logo.svg'

const getAnimationStyle = ({ isVisible, fadeOut }) => {
  return isVisible
    ? `fadeInDown 0.5s cubic-bezier(0.17, 0.84, 0.44, 1) 0s forwards`
    : fadeOut
    ? `fadeOut 0.25s ease-out 0s forwards`
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
  background: ${props => transparentize(0.1, props.theme.colors.primaryDark)};
  color: ${props => props.theme.colors.white};
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
const LogoAndText = styled.div`
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
const _Nav = styled.nav`
  a {
    display: inline-block;
    margin-left: 1rem;
    color: inherit;
    position: relative;

    &:after {
      content: '';
      position: absolute;
      display: block;
      left: 0;
      bottom: -2px;
      width: 100%;
      height: 2px;
      opacity: 0;
      background: currentColor;
      transition: all 0.25s ease-out;
    }

    &:hover,
    &:focus {
      color: inherit;

      &:after {
        opacity: 1;
      }
    }
  }
`
const Nav = () => (
  <_Nav>
    <HeaderLink to="/portfolio">Portfolio</HeaderLink>
    <HeaderLink to="#resume">Resume</HeaderLink>
  </_Nav>
)
const HeaderLink = styled(Link)`
  text-decoration: none;
  font-weight: 700;
`

const ScrolledHeader = ({ isVisible, fadeOut, disabled }) => (
  <Wrapper isVisible={isVisible} fadeOut={fadeOut} disabled={disabled}>
    <WidthWrapper>
      <NavContainer>
        <LogoAndText>
          <LogoContainer>
            <Link to="/">
              <Logo src={logo} />
            </Link>
            <LogoBackground />
          </LogoContainer>
          <ScrollingAbout>
            <IAmA />
          </ScrollingAbout>
        </LogoAndText>

        <Nav />
      </NavContainer>
    </WidthWrapper>
  </Wrapper>
)
ScrolledHeader.propTypes = {
  isVisible: PropTypes.bool,
  fadeOut: PropTypes.bool,
  disabled: PropTypes.bool,
}

const HeaderWrapper = styled.div`
  position: fixed;
  z-index: 9999;
  top: 0;
  left: 0;
  width: 100vw;
  height: ${props => props.theme.heights.header};
  display: flex;
  align-items: center;
  text-align: right;
  background: ${props => props.theme.colors.white};
  color: ${props => props.theme.colors.primaryDark};
  border-bottom: 1px solid ${props => props.theme.colors.lighterGrey};
`
const Header = ({ isVisible, fadeOut }) => (
  <HeaderWrapper>
    <WidthWrapper>
      <Nav />
    </WidthWrapper>
  </HeaderWrapper>
)

Header.propTypes = {
  isVisible: PropTypes.bool,
  fadeOut: PropTypes.bool,
}

export { Header, ScrolledHeader }
