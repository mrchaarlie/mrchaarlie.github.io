import * as React from 'react'
import styled from 'styled-components'

import WidthWrapper from 'components/WidthWrapper'
import Hero from 'components/Hero'
import Section from 'components/Section'
import Portfolio from 'components/Portfolio'
import Process from 'components/Process'
import Skills from 'components/Skills'
import Resume from 'components/Resume'
import Profiles from 'components/Profiles'
import Faq from 'components/Faq'

export default () => (
  <div>
    <Hero />

    <Section>
      <Portfolio />
    </Section>

    <Section>
      <Process />
    </Section>

    <Section>
      <Skills />
    </Section>

    <Section>
      <Resume />
    </Section>

    <Section>
      <Faq />
    </Section>

    <Section>
      <Profiles />
    </Section>
  </div>
)
