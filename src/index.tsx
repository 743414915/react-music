import React from "react";
import { HashRouter } from "react-router-dom";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import "normalize.css";
import { ThemeProvider } from "styled-components";

import "./assets/css/index.less";

import App from "@/App";
import store from "@/store";
import theme from "@/assets/theme";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);
root.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <HashRouter>
        <App />
      </HashRouter>
    </ThemeProvider>
  </Provider>,
);
