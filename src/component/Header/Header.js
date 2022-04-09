import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
const Header = () => {
  return (
    <div>
      <nav className="navbar">
        <Link to="/home">Home</Link>
        <Link to="/Products">Products</Link>
        <Link to="/Orders">Orders</Link>
        <Link to="/register">Register</Link>
        <Link to="/login">Login</Link>
      </nav>
    </div>
  );
};

export default Header;
