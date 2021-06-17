import * as React from 'react'
import { Helmet } from 'react-helmet'
import styled from 'styled-components'
import { Link } from 'components/Router'
import WidthWrapper from '../components/WidthWrapper'
import ImageWrapper from '../components/ImageWrapper'
import imgMaui from '../img/maui-lost.jpg'


const title = styled.h2`

`
export default () => (
  <>
    <Helmet>
      <title>Charles Wu | 404 :(</title>
    </Helmet>

    <WidthWrapper small={true}>
      <h3>404 - Oops, bad link.</h3>
      <p>Here's a pic of Maui instead.</p>
      <ImageWrapper src={imgMaui} alt="Maui's silhouette against a white frosted glass backdrop"/>
      <br />
      <Link to="/">Go to the home page</Link>
      
    </WidthWrapper>
  </>
)
