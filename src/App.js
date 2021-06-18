import * as React from 'react'
import { Root, Routes, addPrefetchExcludes } from 'react-static'
import { Link } from 'components/Router'

import { ThemeProvider } from 'styled-components'
import GlobalStyle, { theme } from './GlobalStyle'

import Loading from 'components/Loading'
import Layout from 'Layout'

const App = () => (
  <ThemeProvider theme={theme}>
    <Root>
      <Layout>
        <GlobalStyle />

        <React.Suspense fallback={<Loading />}>
          <Routes path="*" />
        </React.Suspense>
      </Layout>
    </Root>
  </ThemeProvider>
)

export default App
