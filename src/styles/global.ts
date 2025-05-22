import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding:0;
    box-sizing: border-box;
  }

  :focus {
    outline: 0;
    box-shadow: 0 0 0 2px ${(props) => props.theme['background']};
  }

  body {
    background: ${(props) => props.theme['background']};
    color: ${(props) => props.theme['white']};
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font: 400 1rem Montserrat, sans-serif;
  }

  @media (max-width: 768px) {
    html {
      font-size: 93.75%; /* 15px */
    }
  }

  @media (max-width: 425px) {
    html {
      font-size: 87.5%; /* 14px */
    }
  }
`
