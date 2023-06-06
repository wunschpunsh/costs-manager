import {createGlobalStyle} from 'styled-components';
import MontserratBoldWoff from '../../fonts/Montserrat-Bold.woff';
import MontserratBoldWoff2 from '../../fonts/Montserrat-Bold.woff2';
import MontserratRegularWoff from '../../fonts/Montserrat-Regular.woff';
import MontserratRegularWoff2 from '../../fonts/Montserrat-Regular.woff2';
import background from '../../image/doodles.webp';

const GlobalStyles = createGlobalStyle`

@font-face {
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  src: url(${MontserratRegularWoff}) format("woff");
  font-display: swap;
}

@font-face {
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  src: url(${MontserratRegularWoff2}) format("woff2");
  font-display: swap;
}

@font-face {
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 700;
  src: url(${MontserratBoldWoff}) format("woff");
  font-display: swap;
}

@font-face {
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 700;
  src: url(${MontserratBoldWoff2}) format("woff2");
  font-display: swap;
}

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
