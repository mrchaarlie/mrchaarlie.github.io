import React from 'react'
import styled from 'styled-components'
import BackgroundHeader from 'components/BackgroundHeader'
import Header from 'components/Header'
import WidthWrapper from 'components/WidthWrapper'

const StickyTitle = styled.h2`
  position: sticky;
  margin-bottom: 0;
  top: ${props => props.theme.heights.header};
  background: rgba(255, 255, 255, 0.98);
  padding: 0.5rem 0 0.375rem;

  &:after {
    content: '';
    background: rgb(255, 255, 255);
    background: linear-gradient(
      0deg,
      rgba(255, 255, 255, 0.6) 0%,
      rgba(255, 255, 255, 0.6) 50%,
      rgba(255, 255, 255, 0.9) 51%,
      rgba(255, 255, 255, 0.9) 100%
    );
    position: absolute;
    left: 0;
    bottom: -1rem;
    width: 100%;
    height: 1rem;
  }
`

export default StickyTitle
