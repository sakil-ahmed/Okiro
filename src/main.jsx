import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { GlobalStyles } from "./styles/Globalstyle.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Membership } from "./pages/Membership";
import { StyleGuide } from "./pages/StyleGuide";

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <GlobalStyles />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="membership" element={<Membership />} />
          <Route path="guide" element={<StyleGuide />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </>
);
