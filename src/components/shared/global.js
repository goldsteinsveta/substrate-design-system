import { createGlobalStyle, css } from 'styled-components';
import { color, typography, spacing } from './styles';
import { glow } from './animation';
import 'font-awesome-web3/style.css';
import 'font-awesome/css/font-awesome.min.css';
import 'tachyons/css/tachyons.min.css';

export const bodyStyles = css`
  font-family: ${typography.type.primary};
  // TODO: font-size
  color: ${color.darkest};

  margin: 0;
  overflow-y: auto;
  overflow-x: hidden;

  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  -webkit-tap-highlight-color: transparent;
  -webkit-overflow-scrolling: touch;

  * {
    box-sizing: border-box;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-weight: ${typography.weight.bold};
    margin: 0;
    padding: 0;
  }

  button,
  input,
  textarea,
  select {
    outline: none;
    font-family: ${typography.type.primary};
  }

  a {
    cursor: pointer;
  }

  sub,
  sup {
    font-size: 0.8em;
  }

  sub {
    bottom: -0.2em;
  }

  sup {
    top: -0.2em;
  }

  b,
  em {
    font-weight: ${typography.weight.bold};
  }

  i {
    height: 1em;
    width: 1em;
  }
  i:before {
    font-size: 0.8em;
  }

  hr {
    border: none;
    border-top: 1px solid ${color.border};
    clear: both;
    margin-bottom: 1.25rem;
  }

  .code,
  code,
  pre {
    font-family: ${typography.type.code};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  code {
    display: inline-block;
    padding-left: 2px;
    padding-right: 2px;
    vertical-align: baseline;
  }

  pre {
    line-height: 18px;
    padding: 11px 1rem;
    white-space: pre-wrap;
    background: rgba(0, 0, 0, 0.05);
    color: ${color.darkest};
    border-radius: 3px;
    margin: 1rem 0;
  }

  .ani-glow {
    animation: ${glow} 1.5s ease-in-out infinite;
  }

  .cur-pointer {
    cursor: pointer !important;
  }
  .cur-na {
    cursor: not-allowed !important;
  }
  .cur-progress {
    cursor: progress !important;
  }

  .box1000 {
    padding-left: ${spacing.max1000};
    padding-right: ${spacing.max1000};
  }
  @media screen and (max-width: 60em) {
    .box1000 {
      padding-left: 1.5em;
      padding-right: 1.5em;
    }
  }

  table {
    width: 100%;
    border-collapse: collapse;
    table-layout: fixed;
  }
  th,
  td {
    border: 1px solid ${color.medium};
    text-align: center;
  }
  th {
    position: relative;
    background-color: ${color.light};
    font-family: ${typography.type.code};
    font-size: ${typography.size.s2}px;
    font-weight: ${typography.weight.regular};
    line-height: 1.2rem;
  }
  th i {
    position: absolute;
    right: 0.5rem;
    top: 0;
    bottom: 0;
    margin: auto;
  }
  td {
    padding: 0 0.5rem;
  }

  &.ReactModal__Body--open {
    overflow: hidden;
    &.hide-intercom #intercom-container {
      display: none;
    }
  }

  .ReactModalPortal > div {
    opacity: 0;
  }

  .ReactModalPortal .ReactModal__Overlay {
    transition: all 200ms ease-in;

    &--after-open {
      opacity: 1;
    }
    &--before-close {
      opacity: 0;
    }
  }
`;

// Allow design system consumers to access font settings but control how and
// where they load the font.
export const fontUrl =
  'https://fonts.googleapis.com/css?family=Nunito+Sans:400,700,800,900&display=swap';

export const GlobalStyle = createGlobalStyle`
  body {
    ${bodyStyles}
  }
`;
