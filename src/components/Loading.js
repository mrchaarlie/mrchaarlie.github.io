import * as React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${props => props.theme.colors.lighterGrey};
  animation: fadeInOut 1s cubic-bezier(0.17, 0.84, 0.44, 1) 0s forwards;
`

const Loading = () => (
  <Wrapper>
    <h3>Loading...</h3>
  </Wrapper>
)

export default Loading
