import * as React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { transparentize } from 'polished'
import { Link } from '@reach/router'
import IAmA from './IAmA'
import WidthWrapper from './WidthWrapper'

import logo from '../img/logo.svg'

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

const HeaderLink = styled.a`
  text-decoration: none;
  font-weight: 700;
`

const Nav = () => (
  <_Nav>
    <HeaderLink href="/#">Home</HeaderLink>
    <HeaderLink href="/#work">Work</HeaderLink>
    <HeaderLink href="/#about">About</HeaderLink>
    <HeaderLink href="https://www.linkedin.com/in/mrchaarlie/#experience-section">
      Resume
    </HeaderLink>
  </_Nav>
)

const HeaderContainer = styled.div`
  position: fixed;
  z-index: 900;
  top: 0;
  left: 0;
  width: 100vw;
  height: ${props => props.theme.heights.header};
  display: flex;
  align-items: center;
  text-align: right;
  background: ${props => props.theme.colors.offWhite};
  color: ${props => props.theme.colors.primaryDark};
`

const HeaderWrapper = styled(WidthWrapper)`
  height: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  &:before {
    content: '';
    position: absolute;
    box-shadow: -48px 7px 0 -1px ${props => props.theme.colors.offWhite},
      48px 7px 0 -1px ${props => props.theme.colors.offWhite};
    top: -4px;
    bottom: 4px;
    width: 100%;
    z-index: -1;
    background: ${props => props.theme.colors.offWhite};
  }

  &:after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: -24px;
    right: -24px;
    box-shadow: 0 6px 4px 0 rgba(0, 0, 0, 0.15);
    border-radius: 200px/7px;
    transition: transform 0.5s ease-out;
    transform: ${props =>
      props.showShadow ? `translateY(0)` : `translateY(-8px)`};
    z-index: -2;
  }
`

const Header = ({ showShadow }) => (
  <HeaderContainer>
    <HeaderWrapper showShadow={showShadow}>
      <Nav />
    </HeaderWrapper>
  </HeaderContainer>
)

export default Header
