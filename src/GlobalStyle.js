import { createGlobalStyle } from 'styled-components'

export const theme = {
  colors: {
    black: '#222',
    darkerGrey: '#4F4F4F',
    darkGrey: '#828282',
    grey: '#BDBDBD',
    lightGrey: '#E0E0E0',
    lighterGrey: '#F2F2F2',
    white: '#FFF',
    offWhite: '#F9F7F6',

    primary: '#3396AE',
    primaryLight: '#48D6FA',
    primaryDark: '#205E6E',
    secondary: '#4F408C',
    secondaryLight: '#826AE6',
    secondaryDark: '#292147',
    accent: '#FF6F61',
    accentDark: '#803730',
    success: '#219653',
  },
  fonts: {
    heading: 'Playfair Display',
    body: 'Lora',
  },
  screens: {
    small: '600px',
    medium: '900px',
    large: '1200px',
  },
}

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Lato:400,700|Playfair+Display:400,700');

  html {
    overflow-y: scroll;
    overflow-x: hidden;
    line-height: 1.6;
    color: ${theme.colors.black};
    font-weight: 400;
    font-family: ${theme.fonts.body}, 'Helvetica Neue', Arial, sans-serif;
    font-variant-numeric: lining-nums;
    font-size: 16px;

    @media screen and (min-width: ${theme.screens.large}) {
      font-size: 20px;
    }
  }

  html,
  body,
  #root,
  #root > div {
    margin: 0;
    padding: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    width: 100vw;
    min-height: 100vh;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: ${theme.fonts.heading}, 'Times New Roman', serif;
    line-height: 1.333;
    margin: 0 0 0.4em;
  }
 
  h1 {
    font-size: 4.21rem;
    font-weight: 700;
    color: ${theme.colors.darkerGrey};
  }

  h2 {
    font-size: 3.16rem;
    font-weight: 700;
    color: ${theme.colors.darkerGrey};
  }

  h3 {
    font-size: 2.37rem;
  }

  h4 {
    font-size: 1.78rem;
  }

  h5 {
    font-size: 1.33rem;
  }

  h6 {
    font-weight: 1.33;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.1px;
  }

  p,
  ol,
  ul {
    font-size: 1rem;
    margin-bottom: 0.5rem;
    line-height: 1.6;
  }

  p {
    font-family: ${theme.fonts.body}, 'Helvetica Neue', Arial, sans-serif;
    color: ${theme.colors.black};
  }
`
export default GlobalStyle