import breakpoints from '@css/breakpoints';
import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    --black: #000000;
    --white: #FFFFFF;
    --light-gray: #ABABAB;
    --ultra-light-gray: #F5F5F8;
    --gray: #737373;
    --dark-gray: #3C3C3C;
    --violet: #5573ff;
    --red: #FF7173;
    --size-xxxl: 4.44rem;
    --size-xxl: 2.88rem;
    --size-xl: 2.66rem;
    --size-lg: 1.6rem;
    --size-md: 18px;
    --size-sm: 0.88rem;
    --size-xs: 0.66rem;
    --linear-black-gradient: linear-gradient(204.65deg, rgba(126, 127, 158, 0.2) 4.23%, rgba(0, 0, 0, 0) 68.14%);
    --linear-red-gradient: linear-gradient(204.65deg, #FF7C7E 4.23%, rgba(255, 124, 126, 0) 68.14%);
    --radial-red-gradient: radial-gradient(75% 692.77% at 23.04% -20.71%, #EE5662 15%, #546ACF 100%);

    ${breakpoints.tabletDown} {
      --size-xxxl: 1.89rem;
      --size-xxl: 1.89rem;
      --size-xl: 1rem;
    }
  }

  * {
    box-sizing: border-box;
  }

  html {
    font-size: var(--size-md);
  }

  body {
    font-family: 'Circular', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    background-color: var(--black);
    color: var(--white);
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    font-variant-ligatures: common-ligatures;
    -moz-osx-font-smoothing: grayscale;
    overflow-x: hidden;

    &.body--contained {
      overflow-x: initial;

      main {
        overflow: initial !important;
      }
    }
  }

  *::selection {
    background: var(--violet);
  }

  .fade-in-menu {
    opacity: 1;
    animation-name: fadeInOpacity;
    animation-iteration-count: 1;
    animation-timing-function: ease-in;
    animation-duration: 0.5s;
  }

  @keyframes fadeInOpacity {
    0% {
      opacity: 0.1;
    }
    100% {
      opacity: 1;
    }
  }
`;

export default GlobalStyles;
