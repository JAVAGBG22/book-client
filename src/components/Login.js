import { useState } from "react";
import "../styles/Login.css";

const Login = () => {
  const [userName, setUserName] = useState();
  const [password, setPassword] = useState();

  return (
    <div className="login-container">
      <h1>Login</h1>
      <div>
        <label>
          <h3>Username</h3>
          <input
            type="text"
            value={userName}
            setUserName={(e) => setUserName(e.target.value)}
          />
        </label>
        <label>
          <h3>Password</h3>
          <input
            type="text"
            value={password}
            setUserName={(e) => setPassword(e.target.value)}
          />
        </label>
      </div>
      <button>Login</button>
    </div>
  );
};

export default Login;
