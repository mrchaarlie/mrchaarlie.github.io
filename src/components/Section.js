import React from 'react'
import styled from 'styled-components'

const _Section = styled.section`
  margin-bottom: 4rem;
  margin-top: ${props => (props.first ? '4rem' : '0')};
`

const Section = ({ children, first, ...rest }) => (
  <_Section first={first} {...rest}>
    {children}
  </_Section>
)

export default Section
