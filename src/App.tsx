import React from "react";
import { Routes, Route } from "react-router-dom";

// Core Pages
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";

import "./index.css";
import AuthRoute from "./components/AuthRoute";
import EntryPage from "./pages/EntryPage";
import AboutPage from "./pages/AboutPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<EntryPage />} />
      <Route path="/login" element={<LoginPage />} />
            <Route path="/about" element={<AboutPage />} />
      <Route path="/home" element={<AuthRoute><HomePage /></AuthRoute>} />
    </Routes>
  );
}

export default App;
