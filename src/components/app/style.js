import {createGlobalStyle} from 'styled-components';

const GlobalStyles = createGlobalStyle`
html {
  height: 100%;
}

*,
*::before,
*::after {
  box-sizing: border-box;
}

body,
html {
  margin: 0;
  padding: 0;
  min-height: 100vh;

}

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: #f5f5dc;
}

img,
video {
  display: block;
  max-width: 100%;
  height: auto;
}
`;

export {GlobalStyles};
