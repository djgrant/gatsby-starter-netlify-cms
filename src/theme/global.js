import { css } from '@emotion/core';

export default css`
  html,
  input,
  button,
  select {
    font-size: 16px;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: 'Roboto', 'Helvetica Neue', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: 'Playfair Display', serif;
    margin: 0;
    line-height: 1;
    letter-spacing: -1px;
  }

  p {
    margin: 0;
  }

  a {
    text-decoration: none;
  }

  fieldset {
    border: 0;
    padding: 0;
    margin: 0;
  }
`;
