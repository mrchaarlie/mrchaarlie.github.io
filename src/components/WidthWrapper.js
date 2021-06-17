import * as React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const OuterWrapper = styled.div`
  margin-left: auto;
  margin-right: auto;
  width: ${props => (props.small ? '80%' : '100%')};
  max-width: ${props => props.small && '600px'};
  position: relative;

  @media ${props => props.theme.media.medium} {
    max-width: calc(
      ${props => (props.small ? '600px' : props.theme.screens.medium)} - 2rem
    );
  }
`

const InnerWrapper = styled.div`
  padding: 0 1.5rem;

  @media ${props => props.theme.media.small} {
    padding: 0 2rem;
  }

  @media ${props => props.theme.media.medium} {
    padding: 0;
  }
`

const WidthWrapper = ({ small, children, ...rest }) => (
  <OuterWrapper small={small} {...rest}>
    <InnerWrapper>{children}</InnerWrapper>
  </OuterWrapper>
)

WidthWrapper.propTypes = {
  small: PropTypes.bool,
  children: PropTypes.any,
}
export default WidthWrapper
