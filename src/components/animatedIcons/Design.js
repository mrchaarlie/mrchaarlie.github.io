import React from 'react'
import styled from 'styled-components'
import SVGWrapper from '../SVGWrapper'
import _IconDesign from '../icons/Design'

const Wrapper = styled(SVGWrapper)`
  path {
    stroke-dasharray: 0 339;
    stroke-dashoffset: 178;
    animation: animation-design 2s ease-out forwards;
  }

  @keyframes animation-design {
    to {
      stroke-dasharray: 339;
      stroke-dashoffset: ${339 * 2};
    }
  }
`

const IconDesign = ({ ...props }) => (
  <Wrapper {...props}>
    <_IconDesign />
  </Wrapper>
)

export default IconDesign
