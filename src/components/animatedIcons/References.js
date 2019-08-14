import React from 'react'
import styled from 'styled-components'
import SVGWrapper from '../SVGWrapper'
import _IconReferences from '../icons/References'

const Wrapper = styled(SVGWrapper)`
  path {
    stroke-dasharray: 0 486;
    stroke-dashoffset: 243;
    animation: animation-references 2s ease-out forwards;
  }

  @keyframes animation-references {
    to {
      stroke-dasharray: 486 486;
      stroke-dashoffset: ${486 * 2};
    }
  }
`

const IconReferences = () => (
  <Wrapper>
    <_IconReferences />
  </Wrapper>
)

export default IconReferences
