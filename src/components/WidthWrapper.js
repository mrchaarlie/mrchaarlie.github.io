import * as React from 'react'
import styled from 'styled-components'

const OuterWrapper = styled.div`
  margin-left: auto;
  margin-right: auto;
  width: ${props => (props.small ? '80%' : '100%')};

  @media ${props => props.theme.media.medium} {
    max-width: calc(${props => props.theme.screens.medium} - 2rem);
  }
  max-width: ${props => props.small && '600px'};
`

const InnerWrapper = styled.div`
  padding: 0 1rem;

  @media ${props => props.theme.media.small} {
    padding: 0 2rem;
  }

  @media ${props => props.theme.media.medium} {
    padding: 0;
  }
`

const WidthWrapper = ({ children, small }) => (
  <OuterWrapper small={small}>
    <InnerWrapper>{children}</InnerWrapper>
  </OuterWrapper>
)

export default WidthWrapper
