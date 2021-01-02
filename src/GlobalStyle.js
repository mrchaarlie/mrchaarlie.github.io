import { css, createGlobalStyle } from 'styled-components'

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
    primary: '#B56893',
    primaryLight: '#E7C1D6',
    primaryDark: '#7F3E62',
    secondary: '#2C358C',
    secondaryLight: '#AABEFD',
    secondaryDark: '#212763',
    accent: '#FF6F61',
    accentDark: '#803730',
    success: '#219653',
  },
  fonts: {
    heading: 'Playfair Display',
    body: 'Lato',
  },
  screens: {
    small: '600px',
    medium: '900px',
    large: '1200px',
    short: '700px',
  },
  media: {
    small: 'screen and (min-width: 600px)',
    medium: 'screen and (min-width: 900px)',
    large: 'screen and (min-width: 1200px)',
    short: 'screen and (min-width: 900px) and (max-height: 700px)',
  },
  heights: {
    header: '3.5rem',
    footer: '4rem',
  },
  shadows: {
    one: `0 2px 2px 0 rgba(0,0,0,0.14),
          0 3px 1px -2px rgba(0,0,0,0.12),
          0 1px 5px 0 rgba(0,0,0,0.2)`,
    two: `0 4px 5px 0 rgba(0,0,0,0.14),
          0 1px 10px 0 rgba(0,0,0,0.12),
          0 2px 4px -1px rgba(0,0,0,0.3)`,
    three: `0 8px 14px 2px rgba(0,0,0,0.14),
          0 3px 10px 2px rgba(0,0,0,0.12),
          0 5px 5px -3px rgba(0,0,0,0.2)`,
    four: `0 16px 24px 2px rgba(0,0,0,0.14),
          0 6px 30px 5px rgba(0,0,0,0.12),
          0 8px 10px -7px rgba(0,0,0,0.2)`,
  },
  easings: {
    easeOutQuad: `cubic-bezier(0.5, 1, 0.89, 1)`,
    easeOutCubic: `cubic-bezier(0.33, 1, 0.68, 1)`,
  }
}

const animations = css`

  @keyframes fadeOut {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  @keyframes fadeInDown {
    0% {
      opacity: 0;
      transform: translate(0, -4rem);
    }
    100% {
      opacity: 1;
      transform: translate(0, 0);
    }
  }
  @keyframes fadeInOut {
    0% {
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
  @keyframes fadeInToRight {
    0% {
      opacity: 0;
      transform: translate(-3rem, 0);
    }
    100% {
      opacity: 1;
      transform: translate(0, 0);
    }
  }
  @keyframes fadeInDown {
    0% {
      opacity: 0;
      transform: translate(0, -4rem);
    }
    100% {
      opacity: 1;
      transform: translate(0, 0);
    }
  }
  @keyframes slideInDown {
    0% {
      transform: translateY(-4rem);
      opacity: 1;
    }
    100% {
      transform: translateY(0);
      opacity: 1;
    }
  }
  @keyframes slideOutDown {
    0% {
      height: 100%;
    }
    100% {
      height: 0%;
    }
  }

  @keyframes zoomOut {
    0% {
      opacity: 0;
    }
    10% {
      opacity: 0;
      transform: scale(1.25);
    }
    100% {
      transform: scale(1);
      opacity: 1;
    }
  }
`

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
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    @media ${theme.media.medium} {
      font-size: 18px;
    }

    @media ${theme.media.large} {
      font-size: 18px;
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
    line-height: 1.2;
    margin: 0 0 0.4em;
    color: ${theme.colors.darkerGrey};
  }

  // Font size uses Perfect Fourth scaling
  h1 {
    font-size: 4.209em;
    font-weight: 700;
  }

  h2 {
    font-size: 3.157em;
    font-weight: 700;
  }

  h3 {
    font-size: 2.369em;
    font-weight: 400;
  }

  h4 {
    font-size: 1.777em;
    font-weight: 400;
  }

  h5 {
    font-size: 1.333em;
    font-weight: 400;
  }

  h6 {
    font-weight: 700;
    font-size: 1em;
    text-transform: uppercase;
    letter-spacing: 0.1px;
  }


  p,
  ol,
  ul {
    font-size: 1em;
    margin-top: 0;
    margin-bottom: 0.5rem;
    line-height: 1.6;
  }

  p {
    font-family: ${theme.fonts.body}, 'Helvetica Neue', Arial, sans-serif;
    color: ${theme.colors.black};
  }

  button {
    cursor: pointer;
  }

  a {
    color: ${theme.colors.primary};

    &:hover,
    &:focus {
      color: ${theme.colors.primaryDark};
    }
  }

  ${animations};
`

export default GlobalStyle
