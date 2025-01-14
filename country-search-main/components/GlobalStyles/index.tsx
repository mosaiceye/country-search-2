import { createGlobalStyle } from "styled-components";
import theme from "@theme/index";

const GlobalStyle = createGlobalStyle`
  /*
  http://meyerweb.com/eric/tools/css/reset/
  v2.0 | 20110126
  License: none (public domain)
  */
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
      margin: 0;
      padding: 0;
      border: 0;
      font-size: 100%;
      font: inherit;
      vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure,
  footer, header, hgroup, menu, nav, section {
      display: block;
  }
  body {
      line-height: 1;
  }
  ol, ul {
      list-style: none;
  }
  blockquote, q {
      quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
      content: '';
      content: none;
  }
  table {
      border-collapse: collapse;
      border-spacing: 0;
  }

  /** Custom Below **/
  html, body {
    margin: auto;
    scroll-behavior: smooth;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    background-color: ${theme.colors.background}
  }

  h1, h2, h3, h4, h5, h6, h7 {
    padding-top: 1rem;
    padding-bottom: 1rem;
    font-weight: bold;
  }

  h1 {
    font-size: calc(100% + 3.5714285714285716vw);
    @media (min-width: ${theme.breakpoints.max}) {
      font-size: 60px;
    }
  }

  h2 {
    font-size: calc(100% + 2.9761904761904763vw);
    @media (min-width: ${theme.breakpoints.max}) {
      font-size: 50px;
    }
  }

  p {
    padding-bottom: .5rem;
  }

  strong, b {
    font-weight: bold;
  }
`;

export default GlobalStyle;
