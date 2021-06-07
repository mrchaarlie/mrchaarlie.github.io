import * as React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'


const Wrapper = styled.div`
  svg {
    width: 2.5rem;
    height: 2.5rem;
    opacity: ${props => props.opacity};

    path {
      stroke: ${props => props.strokeColor};
      stroke-width: 3px;
      stroke-miterlimit: 0;
      stroke-linecap: round;
      stroke-linejoin: round;
      stroke-dasharray: ${props => props.strokeArray };
      stroke-dashoffset: ${props => props.strokeArray };
      transition: stroke 0.5s ease;
      animation: ${props => props.showAnimation ? `start-animation-${props.name} 2s forwards` : 'none'};
      animation-timing-function: ${props => props.theme.easings.easeOutCubic};
      animation-delay: ${props => props.delay }ms;
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

const SvgIconWrapper = ({ name, showAnimation, strokeColor="#BDBDBD", strokeArray=500, delay=0, opacity=1, children, ...rest }) => (
  <Wrapper {...rest} name={name} showAnimation={showAnimation} strokeColor={strokeColor} strokeArray={strokeArray} delay={delay} opacity={opacity}>
    {children}
  </Wrapper>
)

SvgIconWrapper.propTypes = {
  name: PropTypes.string,
  showAnimation: PropTypes.bool,
  strokeColor: PropTypes.string,
  strokeArray: PropTypes.number,
  delay: PropTypes.number,
  opacity: PropTypes.number,
  children: PropTypes.any,
}

export default SvgIconWrapper