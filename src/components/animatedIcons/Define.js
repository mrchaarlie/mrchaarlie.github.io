import React from 'react'
import styled from 'styled-components'
import SVGWrapper from '../SVGWrapper'
import _IconDefine from '../icons/Define'

const Wrapper = styled(SVGWrapper)`
  path {
    stroke-dasharray: 665;
    stroke-dashoffset: 665;
    animation: animation-define 2s ease-out forwards;
  }

  @keyframes animation-define {
    to {
      stroke-dashoffset: 1330;
    }
  }
`

const IconDefine = () => (
  <Wrapper>
    <_IconDefine />
  </Wrapper>
)

export default IconDefine
