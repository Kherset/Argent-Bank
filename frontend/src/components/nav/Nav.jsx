import React from "react";
import { Link } from "react-router-dom";
import logo from "../../images/Logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";
import "../style.css";

function Nav() {
  return (
    <nav className="main-nav">
      <Link to="/" className="main-nav-logo">
        <img
          className="main-nav-logo-image"
          src={logo}
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </Link>
      <div>
        <Link to="/sign-in" className="main-nav-item">
          <FontAwesomeIcon icon={faCircleUser} className="fa-user-circle" />
          Sign In
        </Link>
      </div>
    </nav>
  );
}

export default Nav;
