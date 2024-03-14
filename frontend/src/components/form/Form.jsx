import { faCircleUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { userLogin } from "../../app/apiService";
import {
  loginUserSuccess,
  setError,
  updateUserField,
} from "../../features/authSlice";

function Form() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.auth.user);
  const [rememberMe, setRememberMe] = useState(false);
  const error = useSelector((state) => state.auth.error);

  useEffect(() => {
    const storedUser = localStorage.getItem("argentBank");
    if (storedUser) {
      const { email, password } = JSON.parse(storedUser);
      dispatch(updateUserField({ field: "email", value: email }));
      dispatch(updateUserField({ field: "password", value: password }));
      setRememberMe(true);
    }
  }, [user, dispatch]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch(updateUserField({ field: name, value }));
  };

  const handleRememberMeChange = () => {
    if (rememberMe) {
      localStorage.removeItem("argentBank");
    }
    setRememberMe(!rememberMe);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(setError(null));
    if (!user.email || !user.password) {
      dispatch(setError("You must complete all fields."));
      return;
    }

    userLogin(user)
      .then((response) => response.json())
      .then((result) => {
        if (result.body && result.body.token) {
          const token = result.body.token;
          dispatch(loginUserSuccess({ token: token, isAuthenticated: true }));
          if (!rememberMe) {
            dispatch(updateUserField({ field: "email", value: "" }));
            dispatch(updateUserField({ field: "password", value: "" }));
          } else {
            window.localStorage.setItem(
              "argentBank",
              JSON.stringify({
                email: user.email,
                password: user.password,
              })
            );
          }
          navigate("/profile");
        } else {
          dispatch(setError("Email or password incorrect."));
        }
      });
  };

  return (
    <main className="main bg-dark">
      <section className="sign-in-content">
        <FontAwesomeIcon icon={faCircleUser} className="sign-in-icon" />
        <h1>Sign In</h1>
        <form onSubmit={handleSubmit}>
          <div className="input-wrapper">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              id="email"
              name="email"
              value={user.email}
              onChange={handleChange}
            />
            {error && <p className="error">{error}</p>}{" "}
            {/* Afficher l'erreur */}
          </div>
          <div className="input-wrapper">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={user.password}
              onChange={handleChange}
            />
          </div>
          <div className="input-remember">
            <input
              type="checkbox"
              id="remember-me"
              checked={rememberMe}
              onChange={handleRememberMeChange}
            />
            <label htmlFor="remember-me">Remember me</label>
          </div>
          <button type="submit" className="sign-in-button">
            Sign In
          </button>
        </form>
      </section>
    </main>
  );
}

export default Form;
