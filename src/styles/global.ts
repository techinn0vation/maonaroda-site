import { createGlobalStyle } from 'styled-components'
import { globalBackground } from '../themes/scheme'

export const GlobalStyle = createGlobalStyle`
  *,*::before,*::after {
    margin: 0;
    padding: 0;
    border: none;
    box-sizing: border-box;
  }
  html{
    font-size: 62.5%;
  }
  html, body {
    width: 100vw;
    height: 100vh;
  }
  body {
    --webkit-font-smoothing: antialiased;
    -webkit-tap-highlight-color: transparent;
    text-rendering: optimizeLegibility;
    font-family: 'inter', sans-serif;
    background: ${globalBackground};

    &::-webkit-scrollbar {
      width: 0;
      height: 0;
    }
  }
`
