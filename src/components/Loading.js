import React from 'react'
import { Link } from 'components/Router'
import styled from 'styled-components'

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Loading = () => (
  <Wrapper>
    <h3>Loading...</h3>
  </Wrapper>
)

export default Loading
