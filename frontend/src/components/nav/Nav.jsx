import { faCircleUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logoutUser, selectIsAuthenticated } from "../../features/authSlice";
import { setUserData } from "../../features/userSlice";
import logo from "../../images/Logo.png";
import "../style.css";

function Nav() {
  const isAuthenticated = useSelector(selectIsAuthenticated);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logOut = () => {
    dispatch(logoutUser());
    dispatch(setUserData({ firstName: "", lastName: "" }));
    navigate("/");
  };

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
        {isAuthenticated ? (
          <button onClick={logOut}>
            <FontAwesomeIcon icon={faCircleUser} className="fa-user-circle" />{" "}
            Log out
          </button>
        ) : (
          <Link to="/sign-in" className="main-nav-item">
            <FontAwesomeIcon icon={faCircleUser} className="fa-user-circle" />
            Sign In
          </Link>
        )}
      </div>
    </nav>
  );
}

export default Nav;
