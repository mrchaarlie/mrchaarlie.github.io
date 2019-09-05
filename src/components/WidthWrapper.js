import * as React from 'react'
import PropTypes from 'prop-types'
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

const WidthWrapper = ({ small, children }) => (
  <OuterWrapper small={small}>
    <InnerWrapper>{children}</InnerWrapper>
  </OuterWrapper>
)

WidthWrapper.propTypes = {
  small: PropTypes.bool,
  children: PropTypes.any,
}
export default WidthWrapper
