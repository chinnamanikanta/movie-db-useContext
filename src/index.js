import { StrictMode } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { AppProvider } from "./context";

import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <AppProvider>
      <App />
    </AppProvider>
  </StrictMode>,
  rootElement
);
