import { useState } from "react";
import axios from "axios";
import SearchForm from "../components/SearchForm";
import UserCard from "../components/UserCard";

const SearchPage = () => {
  const [users, setUsers] = useState([]);

  const handleSearch = async (username) => {
    try {
      const res = await axios.get(`https://api.github.com/users/${username}`);
      setUsers([res.data]);
      saveToHistory(username, true);
    } catch {
      alert("User not found");
      saveToHistory(username, false);
    }
  };

  const saveToHistory = (username, success) => {
    const history = JSON.parse(localStorage.getItem("searchHistory")) || [];
    history.push({ username, success, date: new Date().toISOString() });
    localStorage.setItem("searchHistory", JSON.stringify(history));
  };

  return (
    <div>
      <SearchForm onSearch={handleSearch} />
      {users.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
    </div>
  );
};

export default SearchPage;
