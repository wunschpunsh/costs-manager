import {createGlobalStyle} from 'styled-components';
import '../../style/font.css';
import background from '../../image/doodles.webp';

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
  font-family: 'Montserrat', 'Arial', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background: url(${background});
}

img,
video {
  display: block;
  max-width: 100%;
  height: auto;
}

button {
  font-family: 'Montserrat', 'Arial', sans-serif;
}
`;

export {GlobalStyles};
