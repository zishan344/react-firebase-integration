import React from "react";
import { Link } from "react-router-dom";
import useFirebase from "../../hooks/useFirebase";
import "./Header.css";
const Header = () => {
  const { user, handaleSignOut } = useFirebase();
  return (
    <div>
      <nav className="navbar">
        <Link to="/home">Home</Link>
        <Link to="/Products">Products</Link>
        <Link to="/Orders">Orders</Link>
        <Link to="/register">Register</Link>
        <span style={{ marginRight: "10px" }}>
          {user?.displayName && user.displayName}
        </span>
        {user?.uid ? (
          <button onClick={handaleSignOut}> Sign Out </button>
        ) : (
          <Link to="/login">Login</Link>
        )}
      </nav>
    </div>
  );
};

export default Header;
