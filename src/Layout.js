import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import Header from 'components/Header'
import Footer from 'components/Footer'

const Wrapper = styled.div`
  min-width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`
const Main = styled.div`
  flex-grow: 1;
  min-height: 400px;
  margin-top: ${props => props.theme.heights.header};
`
const Test = styled.div`
  position: fixed;
  z-index: 10000;
  top: 0;
  color: red;
`

const Layout = ({ children }) => {
  const [scrollPos, setScrollPos] = useState(0)

  const handleScroll = () => {
    setScrollPos(window.scrollY)
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    console.log('use effect')
  })

  return (
    <Wrapper id="main" onScroll={() => setScrollPos(getYScrollPos())}>
      <Header />

      <Main>
        <Test>{scrollPos}</Test>
        {children}
      </Main>
      <Footer />
    </Wrapper>
  )
}

export default Layout
