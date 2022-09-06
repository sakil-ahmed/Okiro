import { createGlobalStyle } from "styled-components";
import { THEME } from "./Themes";
import { media } from "./Respinsive";

export const GlobalStyles = createGlobalStyle`
*, *::before, *::after {
  box-sizing: border-box;
  font-family: 'Nunito', sans-serif;
}

* {
  margin: 0;
}

html, body {
  font-family: 'Nunito', sans-serif;
}

body {
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
  font-family: 'Nunito', sans-serif;
  color: ${THEME.colors.primary};
}

img, picture, video, canvas {
  display: block;
  max-width: 100%;
}
a{
  text-decoration: none;
  color: ${THEME.colors.primary};
}

input, button, textarea, select {
  font: inherit;
}

p, h1, h2, h3, h4, h5, h6 {
  overflow-wrap: break-word;
}
ul{
  margin: 0;
  padding: 0;
}
ul > li{
  margin: 0;
  padding: 0;
  list-style: none;
}

#root, #__next {
  isolation: isolate;
}

.header_container{
  padding: 0 20px;
  max-width: 1280px;
  width: 100%;
  margin: 0 auto;
  ${media.up("xxl")}{
    max-width: 1440px;
    width: 100%;
  }
}

.container{
  max-width: 1280px;
  width: 100%;
  margin: 0 auto;
  padding: 0 20px ;
  
}
/* custon class */
.display_flex{
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${THEME.colors.bodyColor};
}

`;
