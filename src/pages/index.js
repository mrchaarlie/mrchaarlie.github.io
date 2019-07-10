import * as React from 'react'
import styled from 'styled-components'

import WidthWrapper from 'components/WidthWrapper'
import Hero from 'components/Hero'
import Portfolio from 'components/Portfolio'

export default () => (
  <div>
    <Hero />

    <WidthWrapper>
      <Portfolio />
      <Portfolio />
      <Portfolio />
    </WidthWrapper>
  </div>
)
