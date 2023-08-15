import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./app.css";


const container = document.createElement("div");
document.body.appendChild(container);
const root = ReactDOM.createRoot(container);
root.render(
      <App />
);
