import { createGlobalStyle } from "styled-components";
import "modern-normalize";
import { variables } from "./variables";
import BG from "../images/BG.jpg";

export const GlobalStyle = createGlobalStyle`

${variables}

body {color: var(--text);
  font-family: 'Poppins', sans-serif;
  line-height: 1.5;
}

section { background-image: url(${BG});}

h1,
h2,
h3,
p {
  margin: 0;
  color: var(--text);
}

h1 {
font-size: 32px;
font-weight: 600;
line-height: normal;
margin: 40px 0; }

ul,
ol {
  margin: 0;
  padding: 0;
  list-style: none;
}

img {
  display: block;
  max-width: 100%;
  height: auto;
}

a{text-decoration:none;}
`;
