import React from 'react'
import styled from 'styled-components'
import BackgroundHeader from './BackgroundHeader'
import Header from './Header'
import WidthWrapper from './WidthWrapper'

const _Section = styled.section`
  margin-bottom: 2rem;
`

const Section = ({ children, ...rest }) => (
  <_Section {...rest}>{children}</_Section>
)

export default Section
