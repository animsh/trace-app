import React, { useState, useEffect } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "material-components-web/dist/material-components-web.min.css";
import "./components/redesigned/_custom.scss";

const Root = () => {
  return (
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  );
};

const root = createRoot(document.getElementById("root"));
root.render(<Root />);

reportWebVitals();
