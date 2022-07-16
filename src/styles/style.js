import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  :root {
    // Colors
    --color-blue-600: #2563EB;
    --color-sky-50: #F0F9FF;
    --color-sky-400: #38BDF8;
    --color-sky-500: #0EA5E9;
    --color-sky-700: #0369A1;
    --color-gray-200: #c4c4cc;
    --color-gray-300: #8d8d99;
    --color-gray-500: #323238;
    --color-gray-600: #29292e;
    --color-gray-700: #121214;
    --color-gray-900: #09090a;

    --border-size: 5px;
  }

  body {
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    background-color: var(--color-gray-700);
    color: var(--color-sky-50);
    font-family: 'Poppins', sans-serif;
    line-height: 1.5;
  }

  p,
  li,
  h1,
  h2,
  h3,
  h4 {
  -ms-hyphens: auto;
  -webkit-hyphens: auto;
  hyphens: auto;
  overflow-wrap: break-word;
}
`;

export default GlobalStyle;
