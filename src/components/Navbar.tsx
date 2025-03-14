
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => (
  <nav className="bg-blue-600 p-4 text-white">
    <ul className="flex gap-4">
      <li><Link to="/">Dashboard</Link></li>
      <li><Link to="/search">Search</Link></li>
      <li><Link to="/history">History</Link></li>
    </ul>
  </nav>
);

export default Navbar;
