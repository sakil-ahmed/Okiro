import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
*, *::before, *::after {
  box-sizing: border-box;
  font-family: 'Nunito', sans-serif;
}

* {
  margin: 0;
}

html, body {
  height: 100%;
  font-family: 'Nunito', sans-serif;
}

body {
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
  font-family: 'Nunito', sans-serif;
}

img, picture, video, canvas, svg {
  display: block;
  max-width: 100%;
}

input, button, textarea, select {
  font: inherit;
}

p, h1, h2, h3, h4, h5, h6 {
  overflow-wrap: break-word;
}

#root, #__next {
  isolation: isolate;
}

.container{
  max-width: 1280px;
  width: 100%;
  margin: 0 auto;
  padding: 15px;
}

`;
