import React from "react";
import { createRoot } from "react-dom/client";
import App from "./components/App/App";

import ReactDOM from "react-dom/client";
import styles from './index.module.css'

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
