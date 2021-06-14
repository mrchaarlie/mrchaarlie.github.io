import * as React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  max-width: 34rem;

  @media ${props => props.theme.media.medium} {
    max-width: 30rem;
  }
`
const WidthWrapper = ({ children }) => <Wrapper>{children}</Wrapper>

export default WidthWrapper
