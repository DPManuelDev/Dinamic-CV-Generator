import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { CVProvider } from "./context/CVContext";
import "./styles/global.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CVProvider>
      <App />
    </CVProvider>
  </React.StrictMode>
);