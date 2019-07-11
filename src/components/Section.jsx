import React from 'react'
import styled from 'styled-components'
import BackgroundHeader from 'components/BackgroundHeader'
import Header from 'components/Header'
import WidthWrapper from 'components/WidthWrapper'

const _Section = styled.section`
  margin-bottom: 2rem;
`

const Section = ({ children, ...rest }) => (
  <_Section {...rest}>{children}</_Section>
)

export default Section
