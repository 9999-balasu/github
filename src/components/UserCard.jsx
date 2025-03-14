





import { Link } from "react-router-dom";

const UserCard = ({ user }) => (
  <div className="border p-4 mt-4">
    <img src={user.avatar_url} alt={user.login} className="w-16 h-16 rounded-full" />
    <h2 className="text-xl font-bold">{user.login}</h2>
    <p>{user.bio}</p>
    <Link to={`/user/${user.login}`} className="text-blue-500">View Profile</Link>
  </div>
);

export default UserCard;
