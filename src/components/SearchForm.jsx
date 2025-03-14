
import { useState } from "react";
import axios from "axios";
import UserCard from "../components/UserCard";
import { saveSearch } from "../utils/localStorage";

const Search = () => {
  const [username, setUsername] = useState("");
  const [user, setUser] = useState(null);
  const [error, setError] = useState("");

  const handleSearch = async () => {
    try {
      setError("");
      const response = await axios.get(`https://api.github.com/users/${username}`);
      setUser(response.data);
      saveSearch(username, true);
    } catch (err) {
      setUser(null);
      setError("User not found");
      saveSearch(username, false);
    }
  };

  return (
    <div className="p-4">
      <input
        className="border p-2"
        type="text"
        placeholder="Enter GitHub username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button className="ml-2 bg-blue-500 text-white p-2" onClick={handleSearch}>Search</button>

      {error && <p className="text-red-500">{error}</p>}
      {user && <UserCard user={user} />}
    </div>
  );
};

export default Search;
