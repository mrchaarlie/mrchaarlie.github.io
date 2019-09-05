import React from 'react'
import styled from 'styled-components'
import SVGWrapper from '../SVGWrapper'
import _IconResearch from '../icons/Research'

const Wrapper = styled(SVGWrapper)`
  path {
    stroke-dasharray: 471;
    stroke-dashoffset: 471;
    animation: animation-research 2s ease-out forwards;
  }

  @keyframes animation-research {
    to {
      stroke-dashoffset: ${471 * 2};
    }
  }
`

const IconResearch = ({ ...props }) => (
  <Wrapper {...props}>
    <_IconResearch />
  </Wrapper>
)

export default IconResearch
