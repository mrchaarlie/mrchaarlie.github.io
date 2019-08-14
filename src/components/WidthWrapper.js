import * as React from 'react'
import styled from 'styled-components'

const OuterWrapper = styled.div`
  margin-left: auto;
  margin-right: auto;
  width: ${props => (props.small ? '80%' : '100%')};

  @media screen and (min-width: ${props => props.theme.screens.medium}) {
    max-width: calc(${props => props.theme.screens.medium} - 2rem);
  }
  max-width: ${props => props.small && '600px'};
`

const InnerWrapper = styled.div`
  padding: 0 1rem;

  @media screen and (min-width: ${props => props.theme.screens.small}) {
    padding: 0 2rem;
  }

  @media screen and (min-width: ${props => props.theme.screens.medium}) {
    padding: 0;
  }
`

const WidthWrapper = ({ children, small }) => (
  <OuterWrapper small={small}>
    <InnerWrapper>{children}</InnerWrapper>
  </OuterWrapper>
)

export default WidthWrapper
