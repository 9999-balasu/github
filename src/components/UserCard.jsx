


import { Link } from "react-router-dom";

const UserCard = ({ user }) => {
  return (
    <div className="user-card">
      <img src={user.avatar_url} alt="Avatar" />
      <h3>{user.login}</h3>
      <Link to={`/user/${user.login}`}>View Profile</Link>
    </div>
  );
};

export default UserCard;
