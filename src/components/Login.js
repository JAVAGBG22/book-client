import { useState, useEffect } from "react";
import "../styles/Login.css";

const Login = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setUser({ ...user, [name]: value });
  };

  const checkEmail = (users) => {
    const u = users.find((u) => u.email === user.email);
    if (u.email === user.email) return user;
    console.log(user);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(user);
  };

  useEffect(() => {});

  return (
    <div className="login-container">
      <h1>Login</h1>
      <div>
        <label>
          <h3>Username</h3>
          <input type="text" />
        </label>
        <label>
          <h3>Password</h3>
          <input type="text" />
        </label>
      </div>
      <button>Login</button>
    </div>
  );
};

export default Login;
