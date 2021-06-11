import React from 'react'
import styled from 'styled-components'

export default styled.span`
  background-image: linear-gradient(
    to right,
    ${props => props.theme.colors.darkGrey} 75%,
    transparent 75%
  );
  background-position: 0 1.2em;
  background-repeat: repeat-x;
  background-size: 8px 2px;
`
