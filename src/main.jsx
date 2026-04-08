import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Letter from "./pages/Letter"; 
import TheMonthsarryLetter from "./pages/TheMonthsarryLetter";
import "./App.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/the-monthsarry-letter" element={<TheMonthsarryLetter />} />
        <Route path="/letter" element={<Letter />} />
        <Route 
      </Routes>
    </Router>
  </React.StrictMode>
);
