import React from 'react'
import { Link } from 'components/Router'

const Header = () => (
  <nav>
    <Link to="/">Home</Link>
    <Link to="/portfolio">Portfolio</Link>
    <Link to="#resume">Resume</Link>
  </nav>
)

export default Header
