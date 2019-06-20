import * as React from 'react'
import styled from 'styled-components'

const OuterWrapper = styled.div`
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  outline: 1px solid red;

  @media screen and (min-width: ${props => props.theme.screens.medium}) {
    max-width: calc(${props => props.theme.screens.medium} - 2rem);
  }
`

const InnerWrapper = styled.div`
  padding: 0 1rem;

  @media screen and (min-width: ${props => props.theme.screens.medium}) {
    padding: 0;
  `

const WidthWrapper = ({ children }) => (
  <OuterWrapper>
    <InnerWrapper>{children}</InnerWrapper>
  </OuterWrapper>
)

export default WidthWrapper
