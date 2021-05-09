import * as React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'


const Wrapper = styled.div`
  svg {
    width: 2.5rem;
    height: 2.5rem;

    path {
      stroke: ${props => props.theme.colors.darkerGrey};
      stroke-width: 3px;
      stroke-miterlimit: 0;
      stroke-linecap: round;
      stroke-linejoin: round;
      stroke-dasharray: ${props => props.strokeArray };
      stroke-dashoffset: ${props => props.strokeArray };
      transition: stroke 0.5s ease;
      animation: ${props => props.showAnimation ? `start-animation-${props.name} 2s forwards` : 'none'};
      animation-timing-function: ${props => props.theme.easings.easeOutCubic};
    }

    &:active > path {
      animation: none;
    }
  }

  @keyframes start-animation-${props => props.name} {
    to {
      stroke-dashoffset: ${props => props.strokeArray * 2 } ;
    }
  }
`

const SvgIconWrapper = ({ name, showAnimation, strokeArray=500, children, ...rest }) => (
  <Wrapper {...rest} name={name} showAnimation={showAnimation} strokeArray={strokeArray}>
    {children}
  </Wrapper>
)

SvgIconWrapper.propTypes = {
  name: PropTypes.string,
  showAnimation: PropTypes.bool,
  strokeArray: PropTypes.number,
  children: PropTypes.any,
}

export default SvgIconWrapper