import React from 'react'
import styled from 'styled-components'
import { Header } from './Header'
import WidthWrapper from './WidthWrapper'

const _Section = styled.section`
  margin-bottom: 4rem;
`

const Section = ({ children, ...rest }) => (
  <_Section {...rest}>{children}</_Section>
)

export default Section
