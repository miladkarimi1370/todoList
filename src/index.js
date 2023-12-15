import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { AuthProvider } from "./components/context/authContext";

const root = document.querySelector("#root");
const $root = ReactDOM.createRoot(root);

$root.render(
  <AuthProvider>
    <App />
  </AuthProvider>
);
