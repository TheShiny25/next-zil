// Vendors
import { createGlobalStyle } from 'styled-components';

const NormalizeStyles = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
  }

  main {
    display: block;
  }

  a {
    background-color: transparent;
    color: inherit;
    text-decoration: none;
    cursor: pointer;
  }

  b,
  strong {
    font-weight: bold;
  }

  img {
    display: block;
    border-style: none;
  }

  figure, blockquote {
    margin: 0;
  }

  cite {
    font-style: normal;
  }

  ul, ol {
    padding: 0;
    margin: 0;
    list-style: none;
  }

  h1, h2, h3, h4, h5, h6, p {
    font-weight: normal;
    margin: 0;
    padding: 0;
  }

  button,
  input,
  optgroup,
  select,
  textarea {
    font-family: inherit;
    font-size: 100%;
    line-height: 1.15;
    margin: 0;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    color: inherit;
  }

  button,
  input {
    overflow: visible;
  }

  button,
  [type='button'],
  [type='reset'],
  [type='submit'] {
    background: transparent;
    border: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    cursor: pointer;
  }

  button::-moz-focus-inner,
  [type='button']::-moz-focus-inner,
  [type='reset']::-moz-focus-inner,
  [type='submit']::-moz-focus-inner {
    border-style: none;
    padding: 0;
  }

  button:-moz-focusring,
  [type='button']:-moz-focusring,
  [type='reset']:-moz-focusring,
  [type='submit']:-moz-focusring {
    outline: 1px dotted ButtonText;
  }

  fieldset {
    padding: 0.35em 0.75em 0.625em;
  }

  legend {
    box-sizing: border-box;
    color: inherit;
    display: table;
    max-width: 100%;
    padding: 0;
    white-space: normal;
  }

  textarea {
    overflow: auto;
  }

  [type='text'],
  [type='email'],
  [type='checkbox'],
  [type='radio'] {
    box-sizing: border-box;
    padding: 0;
  }

  [type='number']::-webkit-inner-spin-button,
  [type='number']::-webkit-outer-spin-button {
    height: auto;
  }

  [type='search'] {
    -webkit-appearance: textfield;
    outline-offset: -2px;
  }

  [type='search']::-webkit-search-decoration {
    -webkit-appearance: none;
  }

  ::-webkit-file-upload-button {
    -webkit-appearance: button;
    font: inherit;
  }

  template {
    display: none;
  }

  [hidden] {
    display: none;
  }
`;

export default NormalizeStyles;
