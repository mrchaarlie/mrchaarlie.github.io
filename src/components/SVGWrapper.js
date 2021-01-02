import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const _SVGWrapper = styled.div`
  height: 100%;
  width: 100%;

  &:active path {
    stroke-linecap: unset;
    animation: none !important;
  }

  path {
    stroke: ${props => props.theme.colors.primary};
    stroke-miterlimit: 0;
    stroke-linecap: round;
    stroke-linejoin: round;
    transition: stroke 0.5s ease;

    stroke-linecap: ${props => (props.hide ? 'unset' : 'round')};
    ${props => props.hide && 'animation: none !important'};
  }

  @keyframes animation-create {
    to {
      stroke-dasharray: 1038 1038;
      stroke-dashoffset: ${1038 * 2};
    }
  }
  @keyframes animation-define {
    to {
      stroke-dashoffset: 1330;
    }
  }
  @keyframes animation-design {
    to {
      stroke-dasharray: 339;
      stroke-dashoffset: ${339 * 2};
    }
  }
  @keyframes animation-polish {
    to {
      stroke-dashoffset: ${808 * 2};
    }
  }
  @keyframes animation-references {
    to {
      stroke-dasharray: 486 486;
      stroke-dashoffset: ${486 * 2};
    }
  }
  @keyframes animation-research {
    to {
      stroke-dashoffset: ${471 * 2};
    }
  }
  @keyframes animation-validate {
    to {
      stroke-dashoffset: 1595;
    }
  }
`
const SVGWrapper = ({ hide = false, children, ...rest }) => (
  <_SVGWrapper hide={hide} {...rest}>
    {children}
  </_SVGWrapper>
)

SVGWrapper.propTypes = {
  hide: PropTypes.bool,
  children: PropTypes.any,
}

export default SVGWrapper