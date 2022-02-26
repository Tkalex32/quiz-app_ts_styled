import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
html {
  height: 100%;
}

body {
  background: linear-gradient(311deg, #f1be68, #ff1900);
  background-size: 400% 400%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  -webkit-animation: bg-anim 30s ease infinite;
  -moz-animation: bg-anim 30s ease infinite;
  animation: bg-anim 30s ease infinite;
}

* {
  box-sizing: border-box;
  font-family: 'Catamaran', sans-serif;
}

@-webkit-keyframes bg-anim {
    0%{background-position:2% 0%}
    50%{background-position:99% 100%}
    100%{background-position:2% 0%}
}
@-moz-keyframes bg-anim {
    0%{background-position:2% 0%}
    50%{background-position:99% 100%}
    100%{background-position:2% 0%}
}
@keyframes bg-anim {
    0%{background-position:2% 0%}
    50%{background-position:99% 100%}
    100%{background-position:2% 0%}
}
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  > p {
    color: white;
  }

  .score {
    color: white;
    font-size: 2rem;
    margin: 0;
  }

  h1 {
    font-family: "Fascinate Inline", cursive;
    font-size: 70px;
    font-weight: 400;
    text-align: center;
    margin: 20px;
    background: #fff;
    background: linear-gradient(to bottom, #fff 0%, #cfcfcf 100%);
    background: -webkit-linear-gradient(to bottom, #fff 0%, #cfcfcf 100%);
    background: -moz-linear-gradient(to bottom, #fff 0%, #cfcfcf 100%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-text-fill-color: transparent;
    -moz-background-clip: text;
    filter: drop-shadow(2px 2px #0085a3);
  }

  .start,
  .next {
    cursor: pointer;
    background: #fff;
    background: linear-gradient(to bottom, #fff 0%, #cfcfcf 100%);
    background: -webkit-linear-gradient(to bottom, #fff 0%, #cfcfcf 100%);
    background: -moz-linear-gradient(to bottom, #fff 0%, #cfcfcf 100%);
    border: 2px solid #0085a3;
    border-radius: 10px;
    height: 40px;
    margin: 20px 0;
    padding: 0 40px;
    transition: all 0.3s ease;
  }

  .start:hover,
  .next:hover {
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
  }

  .start {
    max-width: 200px;
  }
`;
