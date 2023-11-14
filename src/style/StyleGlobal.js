// user agent stylesheet 초기화
import { createGlobalStyle } from 'styled-components';
import snowingImg from 'assets/christmas-background.png';

export const StyledGlobal = createGlobalStyle`
  :root {
    --red: #b93333;
    --yellow: #fee500;
    --blue: #1877f2;

    --gray60: #000;
    --gray50: #515151;
    --gray40: #818181;
    --gray30: #cfcfcf;
    --gray20: #f9f9f9;
    --gray10: #ffffff;

    --brown50: #341909;
    --brown40: #542f1a;
    --brown30: #c7bbb5;
    --brown20: #e4d5c9;
    --brown10: #f5f1ee;

    --shadow-1pt: 0px 4px 4px 0px rgba(140, 140, 140, 0.25);
    --shadow-2pt: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    --shadow-3pt: 0px 16px 20px 0px rgba(48, 48, 48, 0.62);
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    border: 0;
    font-family: "Pretendard";
    word-break: keep-all;
  }

  html,
  body {
    background-color: ${({ theme }) => !theme.snow && theme.backgroundColor};
    font-size: 62.5%;
    -webkit-tap-highlight-color : transparent;
    background-image: url(${({ theme }) => theme.snow && `${snowingImg}`});
    background-size: ${({ theme }) => theme.snow && `100vw 100vh`};
    background-repeat: no-repeat;
    background-attachment: fixed;
  }

  h1 {
    color: var(--gray60);
    font-family: "Actor";
    font-feature-settings: 'clig' off, 'liga' off;
    font-size: 40px;
    font-weight: 400;
  }

  h2 {
    color: var(--gray60);
    font-family: "Actor";
    font-feature-settings: 'clig' off, 'liga' off;
    font-size: 32px;
    font-weight: 400;
  }

  h3 {
    color: var(--gray60);
    font-family: "Actor";
    font-feature-settings: 'clig' off, 'liga' off;
    font-size: 24px;
    font-weight: 400;
  }

  ol, ul {
    list-style: none;
  }

  a {
    color: inherit;
    text-decoration: none;
    cursor: pointer;
  }

  input:focus {
    outline: none;
  }

  button {
    padding: unset;
    border: none;
    background-color: unset;
    cursor: pointer;
  }
`;
