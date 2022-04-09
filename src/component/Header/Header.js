import { getAuth, signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import app from "../../firebase.init";
import "./Header.css";
const auth = getAuth(app);
const Header = () => {
  const [user] = useAuthState(auth);
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
          <button onClick={() => signOut(auth)}> Sign Out </button>
        ) : (
          <Link to="/login">Login</Link>
        )}
      </nav>
    </div>
  );
};

export default Header;
