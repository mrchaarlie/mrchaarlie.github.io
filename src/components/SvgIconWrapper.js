import * as React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'


const Wrapper = styled.div`
  svg {
    width: 2rem;
    height: 2rem;

    path {
      stroke-miterlimit: 0;
      stroke-linecap: round;
      stroke-linejoin: round;
      stroke-dasharray: ${props => props.strokeArray };
      stroke-dashoffset: ${props => props.strokeArray };
      transition: stroke 0.5s ease;
    }
  }

  path {
    animation: ${props => props.showAnimation ? 'start-animation 2s forwards' : 'x'};
    animation-timing-function: ${props => props.theme.easings.easeOutCubic};
  }

  @keyframes start-animation {
    to {
      stroke-dashoffset: ${props => props.strokeArray * 2 } ;
    }
  }
`

// const getShadow = ({ showShadow }) => {
//   return showShadow ? `translateY(0)`: `translateY(-8px)`
// }
//transform: ${props => getShadow({ showShadow: props.showShadow })};

{/* <HeaderWrapper showShadow={showShadow}> */}

const SvgIconWrapper = ({ showAnimation, strokeArray=500, children, ...rest }) => (
  <Wrapper {...rest} showAnimation={showAnimation} strokeArray={strokeArray}>
    {children}
  </Wrapper>
)

SvgIconWrapper.propTypes = {
  showAnimation: PropTypes.bool,
  strokeArray: PropTypes.number,
  children: PropTypes.any,
}

export default SvgIconWrapper