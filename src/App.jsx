import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import SearchPage from "./pages/SearchPage";
import HistoryPage from "./pages/HistoryPage"
import UserProfile from "./pages/UserProfile";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/history" element={<HistoryPage />} />
        <Route path="/user/:username" element={<UserProfile />} />
      </Routes>
    </Router>
  );
}

export default App;
