import React from 'react'
import styled from 'styled-components'
import SVGWrapper from '../SVGWrapper'
import _IconValidate from '../icons/Validate'

const Wrapper = styled(SVGWrapper)`
  path {
    stroke-dasharray: 780 793;
    stroke-dashoffset: 780;
    animation: animation-validate 2s ease-out forwards;
  }

  @keyframes animation-validate {
    to {
      stroke-dashoffset: 1595;
    }
  }
`

const IconValidate = ({ ...props }) => (
  <Wrapper {...props}>
    <_IconValidate />
  </Wrapper>
)

export default IconValidate
