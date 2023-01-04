import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        font-family: 'Roboto', sans-serif;
        background: ${(props) => props.theme['base-background']};
        -webkit-font-smoothing: antialiased;
    }

    body, input, text-area, button {
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
    }

    @media(max-width: 1120px) {
        body {
            padding: 0 10px;
        }
    }
`
