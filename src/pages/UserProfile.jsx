import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const UserProfile = () => {
  const { username } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    axios.get(`https://api.github.com/users/${username}`)
      .then((res) => setUser(res.data))
      .catch(() => alert("User not found"));
  }, [username]);

  return user ? (
    <div>
      <h2>{user.login}</h2>
      <img src={user.avatar_url} alt="Avatar" width={100} />
      <p>Followers: {user.followers}</p>
      <p>Following: {user.following}</p>
      <p>Repos: {user.public_repos}</p>
    </div>
  ) : (
    <p>Loading...</p>
  );
};

export default UserProfile;
