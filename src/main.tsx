// Package imports
import React from "react";
import ReactDOM from "react-dom/client";

// App import
import App from "./App";

// Style imports
import './styles/index.scss';


// Document render point
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
