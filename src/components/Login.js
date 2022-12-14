import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../styles/Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const checkEmail = (users) => {
    const user = users.find(
      (user) => user.email === email && user.password === password
    );
    console.log(user);
    if (user.email === email && user.password === password) return user;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (email === "" || password === "") {
      alert("All fields are required!");
    }

    const user = await axios
      .get(`${process.env.REACT_APP_API}user/all`)
      .then((res) => checkEmail(res.data, email))
      .catch((error) => {
        console.log(error);
      });

    if (user.email === email && user.password === password) {
      // om login success ska vi spara user i localstorage
      localStorage.setItem("user", JSON.stringify(user.name));
      navigate("/");
    }
    setEmail("");
    setPassword("");
  };

  return (
    <div className="login-container">
      <form>
        <h1>Login</h1>
        <div>
          <label>
            <h3>Email</h3>
            <input
              type="text"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <label>
            <h3>Password</h3>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
        </div>
      </form>
      <button type="submit" onClick={handleSubmit}>
        Login
      </button>
    </div>
  );
};

export default Login;
