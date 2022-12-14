import { useState } from "react";
import axios from "axios";
import "../styles/Login.css";

const Register = () => {
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

  const handleSubmit = async (e) => {
    e.preventDefault();

    axios
      .post(`${process.env.REACT_APP_API}user/register`, user)
      .then(alert("User created!"));

    setUser({
      name: "",
      email: "",
      password: "",
    });
  };
  return (
    <div className="login-container">
      <form>
        <h1>Register</h1>
        <div>
          <label>
            <h3>Username</h3>
            <input
              type="text"
              placeholder="Name"
              name="name"
              value={user.name}
              onChange={handleChange}
            />
          </label>
          <label>
            <h3>Email</h3>
            <input
              type="text"
              placeholder="Email"
              name="email"
              value={user.email}
              onChange={handleChange}
            />
          </label>
          <label>
            <h3>Password</h3>
            <input
              type="password"
              placeholder="Password"
              name="password"
              value={user.password}
              onChange={handleChange}
            />
          </label>
        </div>
      </form>
      <button type="submit" onClick={handleSubmit}>
        Sign up
      </button>
    </div>
  );
};

export default Register;
