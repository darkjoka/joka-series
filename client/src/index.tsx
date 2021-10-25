import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { store } from "./store";
import { Provider } from "react-redux";
import GlobalStyle from "./shared/GlobalStyle";
import { Meta } from "./elements/Meta";
import { getThemeVariables } from "./lib/utils-theme";
import { ThemeProvider } from "styled-components";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <GlobalStyle />
      <Meta
        title="Jseries-Download High Quality Tv Series for free"
        image=""
        description="Download all lastest and newest low-sized high quality 480p tv series for free without disturbing ads jumping into your face every second"
      />
      <ThemeProvider theme={getThemeVariables()}>
        <App />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
