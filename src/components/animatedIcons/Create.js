import React from 'react'
import styled from 'styled-components'
import SVGWrapper from '../SVGWrapper'
import _Create from '../icons/Create'

const Wrapper = styled(SVGWrapper)`
  path {
    stroke-dasharray: 0 1038;
    stroke-dashoffset: ${1038 / 2};
    animation: animation-create 2s ease-out forwards;
  }

  @keyframes animation-create {
    to {
      stroke-dasharray: 1038 1038;
      stroke-dashoffset: ${1038 * 2};
    }
  }
`

const Create = () => (
  <Wrapper>
    <_Create />
  </Wrapper>
)

export default Create
