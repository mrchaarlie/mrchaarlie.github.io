import { createGlobalStyle } from 'styled-components'

export const theme = {
  colors: {
    brand: '#FF3449',
    primaryBlue: '#357FFA',
    secondaryBlue: '#F4FEFF',
    primaryYellow: '#F3D33F',
    secondaryPink: '#FADEF5',
    secondaryGreen: '#50BFA8',
    black: '#222',
    darkerGrey: '#4F4F4F',
    darkGrey: '#828282',
    grey: '#BDBDBD',
    lightGrey: '#E0E0E0',
    lighterGrey: '#F2F2F2',
    offWhite: '#F9F7F6',
    white: '#FFF',
  },
  fonts: {
    heading: 'Playfair Display',
    body: 'Lora',
  },
}

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Lato:400,700|Playfair+Display:400,700');

  html {
    overflow-y: scroll;
    overflow-x: hidden;
    line-height: 1.6;
    font-weight: 400;
    font-family: ${theme.fonts.body}, 'Helvetica Neue', Arial, sans-serif;
    color: ${theme.colors.black};
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
