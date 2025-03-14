/*import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import SearchPage from "./pages/SearchPage";
import HistoryPage from "./pages/HistoryPage";
import UserProfile from "./pages/UserProfile";

function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Dashboard</Link>
        <Link to="/search">Search</Link>
        <Link to="/history">History</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/history" element={<HistoryPage />} />
        <Route path="/user/:username" element={<UserProfile />} />
      </Routes>
    </Router>
  );
}

export default App;*/



import React, { useState } from "react";
import "./styles.css";

function App() {
  return (
    <div className="app-container">
      <nav>
        <a href="#">Dashboard</a>
        <a href="#">Search</a>
        <a href="#">History</a>
      </nav>

      <div className="search-box">
        <input type="text" placeholder="Search GitHub Users..." />
        <button>🔍 Search</button>
      </div>

      <div className="user-card">
        <img src="https://github.com/octocat.png" alt="GitHub User" />
        <h3>GitHub User</h3>
        <a href="https://github.com/octocat">View Profile</a>
      </div>
    </div>
  );
}

export default App;

