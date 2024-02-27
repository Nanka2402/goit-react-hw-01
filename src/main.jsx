import React from "react";
import { createRoot } from "react-dom";
import "modern-normalize";
import App from "./components/App/App";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
