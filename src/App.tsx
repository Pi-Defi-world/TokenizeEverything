import React from "react";
import { Routes, Route } from "react-router-dom";

// Core Pages
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";

import "./index.css";
import AuthRoute from "./components/AuthRoute";
import EntryPage from "./pages/EntryPage";
import AboutPage from "./pages/AboutPage";
import LiquidityPoolsPage from "./pages/LiquidityPoolsPage";
import DexPage from "./pages/DexPage";
import TokenizePage from "./pages/TokenizePage";
import { Settings } from "lucide-react";

function App() {
  return (
    <Routes>
      <Route path="/" element={<EntryPage />} />
      <Route path="/login" element={<LoginPage />} />
            <Route path="/about" element={<AboutPage />} />
      <Route path="/home" element={<AuthRoute><HomePage /></AuthRoute>} />
            <Route path="/liquidity_pools" element={<AuthRoute><LiquidityPoolsPage /></AuthRoute>} />
      <Route path="/dex" element={<AuthRoute><DexPage /></AuthRoute>} />
      <Route path="/tokenize" element={<AuthRoute><TokenizePage /></AuthRoute>} />
      <Route path="/settings" element={<AuthRoute><Settings /></AuthRoute>} />

    </Routes>
  );
}

export default App;
