




import { useState, useEffect } from "react";
import { getSearchHistory, clearSearch } from "../utils/localStorage";

const History = () => {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    setHistory(getSearchHistory());
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-xl">Search History</h2>
      <ul>
        {history.map((item, index) => (
          <li key={index} className="border p-2 my-2">
            {item.username} - {item.success ? "✅" : "❌"}
            <button onClick={() => { clearSearch(item.username); setHistory(getSearchHistory()); }} className="ml-2 text-red-500">
              Clear
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default History;
