import React from 'react'
import styled from 'styled-components'
import Header from 'components/Header'
import Footer from 'components/Footer'

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
`
const Main = styled.div`
  flex-grow: 1;
`

const Layout = ({ children }) => (
  <Wrapper>
    <Header />
    <Main>{children}</Main>
    <Footer />
  </Wrapper>
)

export default Layout
