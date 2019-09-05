import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
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
  return (
    <Wrapper id="main">
      <Main>{children}</Main>
      <Footer />
    </Wrapper>
  )
}

Layout.propTypes = {
  children: PropTypes.any,
}
export default Layout
