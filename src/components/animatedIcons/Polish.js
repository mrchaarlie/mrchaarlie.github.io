import React from 'react'
import styled from 'styled-components'
import SVGWrapper from '../SVGWrapper'
import _IconPolish from '../icons/Polish'

const Wrapper = styled(SVGWrapper)`
  path {
    stroke-dasharray: 808;
    stroke-dashoffset: 808;
    animation: animation-polish 2s ease-out forwards;
  }

  @keyframes animation-polish {
    to {
      stroke-dashoffset: ${808 * 2};
    }
  }
`

const IconPolish = ({ ...props }) => (
  <Wrapper {...props}>
    <_IconPolish />
  </Wrapper>
)

export default IconPolish
