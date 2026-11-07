import React from "react";
import "../Styles/NavBar.css";
import { Link } from "react-router-dom";
import Login from "../Pages/Login";
const NavBar = () => {
  return (
    <div className="nav">
      <Link to="/">Back to Actors</Link>
      <h1>NavBar</h1>
    </div>
  );
};

export default NavBar;
