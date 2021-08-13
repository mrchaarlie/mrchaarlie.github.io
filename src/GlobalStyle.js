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
    header: '4rem',
    footer: '4rem',
  },
  shadows: {
    text: `0px 0px 12px rgb(255 255 255 / 95%), 0 0 4px rgb(255 255 255 / 50%)`,
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
  },
  transforms: {
    defaults: `
      backface-visibility: hidden;
      transform-style: preserve-3d;
      transform:translate3d(0,0,0);
      -webkit-transform:translate3d(0,0,0);`
  ,
    isometricZeroA: `
      transform: translate3d(-2rem, 0rem , 4rem);
      -webkit-transform: translate3d(-2rem, 0rem , 4rem)
    `,
    isometricZeroB: `
      transform: translate3d(2rem, 0 , 6rem);
      -webkit-transform: translate3d(2rem, 0 , 6rem),`,
    isometricLeft: `
      transform: rotate3d(1, 0.3, 0, 30deg)
      translate3d(-2rem,5rem,8rem)
      scale(0.9);
      transform-origin: 0 100%;`,
    isometricRight: `transform: rotate3d(1,-0.3,0,30deg) translate3d(3rem,6rem,6rem);
    transform-origin: 0% 100%;`,
    scaleBig: `transform: scale(1.3)`,
    scaleNormal: `transform: scale(1)`,
    skewLeft: `
    transform: skew(0, 20deg);
    transform-origin: 100% 100%;`,
    skewRight: `
    transform: skew(0, -20deg);
    transform-origin: 1px 0%;`,
    isometricLeftZ: `transform: none;
    transform-origin: 100% 100%;`,
    isometricRightZ: `transform: none;
     transform-origin: 0% 60%;`,
  },
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
  @keyframes fadeInSlideDown {
    0% {
      opacity: 0;
      transform: translate(0, -2rem);
    }
    100% {
      opacity: 1;
      transform: translate(0, 0);
    }
  }
  @keyframes fadeInSlideDownSmall {
    0% {
      opacity: 0;
      transform: translate(0, -0.25rem);
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
  @keyframes fadeInSlideRight {
    0% {
      opacity: 0;
      transform: translate(-3rem, 0);
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

  @keyframes wave {
    0% {
      opacity: 1;
      transform: none;
    }
    20% {
      transform: rotate(10deg);
    }
    40% {
      transform: rotate(-10deg);
    }
    60% {
      transform: rotate(10deg);
    }
    80% {
      transform: rotate(-10deg);
    }
    100% {
      opacity: 1;
      transform: rotate(0);
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
    margin: 0.75em 0 0.25em;
    color: ${theme.colors.darkerGrey};
  }

  // Font size uses Perfect Fourth scaling
  h1 {
    font-size: 3.052rem;
    font-weight: 700;
    margin-top: 0;
  }

  h2 {
    font-size: 2.441rem;
    font-weight: 700;
  }

  h3 {
    font-size: 1.953rem;
    font-weight: 400;
  }

  h4 {
    font-size: 1.563rem;
    font-weight: 400;
  }

  h5 {
    font-size: 1.25em;
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
