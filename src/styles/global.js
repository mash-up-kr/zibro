import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    font-family:
      'Noto Sans KR',
      'Apple SD Gothic Neo',
      'Nanum Gothic',
      나눔고딕,
      NanumGothic,
      돋움,
      Dotum,
      굴림,
      Gulim,
      Helvetica,
      sans-serif;
    line-height: normal;
    word-breaK: keep-all;
    overscroll-behavior: none;
  }

  ol, ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  button {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
    background-color: transparent;
  }

  h1, h2, h3, h4, h5, h6 {
    margin: 0;
  }

  p {
    margin: 0;
  }

  input[type="search"]::-webkit-search-decoration,
  input[type="search"]::-webkit-search-cancel-button,
  input[type="search"]::-webkit-search-results-button,
  input[type="search"]::-webkit-search-results-decoration {
    display: none;
  }
`;

export default GlobalStyle;
