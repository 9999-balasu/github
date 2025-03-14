
import { useState } from "react";

const SearchForm = ({ onSearch }) => {
    const [username, setUsername] = useState("");
  
    return (
      <div className="search-box">
        <input
          type="text"
          placeholder="Enter GitHub username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <button onClick={() => onSearch(username)}>Search</button>
      </div>
    );
  };
  
  export default SearchForm;
  