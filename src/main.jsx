import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter, Navigate, Route, Routes } from "react-router-dom";
import Gallery from "./pages/Gallery.jsx";
import Preview from "./pages/Preview.jsx";
import Saved from "./pages/Saved.jsx";
import "./styles/global.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<Gallery />} />
        <Route path="/saved" element={<Saved />} />
        <Route path="/preview/:id" element={<Preview />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </HashRouter>
  </React.StrictMode>
);
