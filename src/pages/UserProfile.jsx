




import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const UserProfile = () => {
  const { username } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    axios.get(`https://api.github.com/users/${username}`).then((res) => setUser(res.data));
  }, [username]);

  if (!user) return <p>Loading...</p>;

  return (
    <div className="p-4">
      <img src={user.avatar_url} alt={user.login} className="w-32 h-32 rounded-full" />
      <h2 className="text-2xl font-bold">{user.login}</h2>
      <p>{user.bio}</p>
      <a href={user.html_url} target="_blank" className="text-blue-500">GitHub Profile</a>
    </div>
  );
};

export default UserProfile;
