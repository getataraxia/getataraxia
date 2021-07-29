import { createGlobalStyle } from 'styled-components';
import { setFont } from './variables';

const Globals = createGlobalStyle`
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    @supports (padding: max(0px)) and (padding: env(safe-area-inset-bottom)) {
        body,
        header,
        footer {
          padding-top: min(0vmin, env(safe-area-inset-top));
          padding-right: min(0vmin, env(safe-area-inset-right));
          padding-bottom: env(safe-area-inset-bottom, 0);
          padding-left: min(0vmin, env(safe-area-inset-left));
        }
  };
  };
  *::-webkit-scrollbar{
    display: none
};

  html {
    font-size: 62.5%; // 1rrem = 10px 10px/16% = 62.55
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  };

  body {
    color: ${({ theme: { colors } }) => colors.colorText};
    background: ${({ theme: { colors } }) => colors.colorTextWhite};
    font-family: ${setFont.main};
    font-weight: 400;
    line-height: 1.6;
    min-height: 100vh;
  };

  body.Modal-Open {
    overflow: hidden;
  }
  h1 {
    font-size: 3rem;
    line-height: 1.2;
    font-weight: 500;
  }
  h2 {
    font-size: 2rem;
    font-weight: 500;
  }
  h3 {
    font-size: 1.6rem;
    line-height: 1;
    font-weight: 500;
  }
  h4 {
    font-size: 1.2rem;
    line-height: 1.2;
    font-weight: 500;
  }
  h5 {
    font-size: 1rem;
    margin-bottom: 1.5rem;
    font-weight: 500;
  }
  h6 {
    font-size: 1rem;
    font-weight: 500;
  }
  p {
    line-height: 1.5;
    margin: 0 0 1.5rem 0;
  }
  button {
    &:hover {
      cursor: pointer;
    }
  }
`;

export default Globals;
