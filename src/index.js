import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import useStore from "./useStore/useStore";
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={useStore}>
      <App />
    </Provider>
  </React.StrictMode>
);
