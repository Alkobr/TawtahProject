import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./LogIn.css";
import loginImg from "./login.png";

export default function LogIn() {
  const [username, setUsername] = useState("mor_2314");
  const [password, setPassword] = useState("83r5^_");
  const navigate = useNavigate();

  const handleLogin = () => {
    fetch("https://fakestoreapi.com/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: "mor_2314",
        password: "83r5^_",
      }),
    })
      .then((res) => res.json())
      .then((json) => {
        if (json.token) {
          localStorage.setItem("token", json.token);
          navigate("/HomePage");
        } else {
          console.error("Login failed:", json);
        }
      })
      .catch((error) => {
        console.error("Error logging in:", error);
      });
  };

  return (
    <div className="loginContainer">
      <div className="loginItem">
        <div className="loginImage">
          <img src={loginImg} width="300" alt="login" />
        </div>
        <div className="loginForm">
          <h2>Login</h2>
          <div className="loginInputs">
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={handleLogin}>Login</button>

            <Link to="/SignUp" className="createAccountButton">
              Create new account?
            </Link>
          </div>
        </div>
      </div>
      <div className="footer">
        <a
          href=""
          target="_blank"
          rel="noopener noreferrer"
          className="footerLink"
        >
          Powered by React
        </a>
      </div>
    </div>
  );
}
