import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/library">Workout Library</Link>
      <Link to="/planner">Planner</Link>
    </nav>
  );
}

export default NavBar;
