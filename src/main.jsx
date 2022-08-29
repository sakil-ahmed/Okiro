import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { GlobalStyles } from "./styles/Globalstyle.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <GlobalStyles />
    <App />
  </>
);
