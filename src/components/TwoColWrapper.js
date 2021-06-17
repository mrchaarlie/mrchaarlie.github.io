import * as React from 'react'
import styled from 'styled-components'

const TwoColWrapper = styled.div`
  display: flex;
  flex-direction: column;

  img {
    margin-top: 3rem;
  }

  @media ${props => props.theme.media.medium} {
    flex-direction: row;
    & > div {
      flex: 1 1 50%;
    }
    & > div:first-of-type {
      margin-right: 1rem;
    }
  }
  @media ${props => props.theme.media.large} {
    width: calc(100% + 8rem);
    margin-left: -4rem;
  }
`

export default TwoColWrapper
