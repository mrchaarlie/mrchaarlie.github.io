import React from 'react'
import { Root, Routes, addPrefetchExcludes } from 'react-static'
import { Link, Router } from 'components/Router'
import Dynamic from 'containers/Dynamic'

import { ThemeProvider } from 'styled-components'
import GlobalStyle, { theme } from './GlobalStyle'

// Any routes that start with 'dynamic' will be treated as non-static routes
addPrefetchExcludes(['dynamic'])

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Root>
        <nav>
          <Link to="/portfolio">Portfolio</Link>
          <a href to="#resume">
            Resume
          </a>
        </nav>

        <div className="content">
          <React.Suspense fallback={<em>Loading...</em>}>
            <Router>
              <Dynamic path="dynamic" />
              <Routes path="*" />
            </Router>
          </React.Suspense>
        </div>
      </Root>
    </ThemeProvider>
  )
}

export default App
