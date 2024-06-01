import React from "react";
import "./NavBar.css";
import { Link, useNavigate } from "react-router-dom";

function NavBar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/LogIn");
  };

  return (
    <nav className="navBar">
      <div className="navLogo">My Store</div>
      <ul className="navLinks">
        <li><Link to="/HomePage">Home</Link></li>
        <li><a href="#about">About</a></li>
        <li><a href="#contact">Contact</a></li>
        <li>
          <button className="logoutButton" onClick={handleLogout}>Logout</button>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
