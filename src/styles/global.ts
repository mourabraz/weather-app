import { createGlobalStyle } from 'styled-components';
import { Colors } from './colors';

export default createGlobalStyle`

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  outline: 0;
}

*:focus {
    outline: 0;
  }

html {
  font-size: 62.5%; /* 10px */
}

body {
  background: ${Colors.primary};
  background: linear-gradient(145deg, ${Colors.primaryDark} 25%, ${Colors.primaryLight} 99%);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

body, input, button {
  font: 1.4rem 'Roboto', sans-serif;
  line-height: 1.6;
  color: ${Colors.primaryText};
}

h1, h2, h3, h4, h5, h6 {
  font-weight: 700;
}
h1 {
  font-size: 2rem;
}
h2 {
  font-size: 1.8rem;
}
h3 {
  font-size: 1.6rem;
}
h4 {
  font-size: 1.4rem;
}
h5, h6 {
  font-size: 1.2rem;
}

button {
  cursor: pointer;
}

a {
  text-decoration: none;
}

ul {
  list-style: none
}
`;
