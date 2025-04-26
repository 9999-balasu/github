import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div>
      <h1>Welcome to GitHub User Search yok</h1>
      <Link to="/search">Go to Search</Link>
    </div>
  );
};

export default Dashboard;
