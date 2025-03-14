


import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const HistoryPage = () => {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    const savedHistory = JSON.parse(localStorage.getItem("searchHistory")) || [];
    setHistory(savedHistory);
  }, []);

  const clearHistory = () => {
    localStorage.removeItem("searchHistory");
    setHistory([]);
  };

  return (
    <div className="container">
      <h2>Search History</h2>
      <button className="clear-history" onClick={clearHistory}>Clear History</button>
      <ul className="history-list">
        {history.map((entry, index) => (
          <li key={index}>
            <Link to={`/user/${entry.username}`}>{entry.username}</Link> - {entry.success ? "✅" : "❌"}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HistoryPage;
