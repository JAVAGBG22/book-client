import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import "../styles/Header.css";

const Header = () => {
  const [name, setName] = useState("");

  useEffect(() => {
    getName();
  }, []);

  const getName = () => {
    const userName = JSON.parse(localStorage.getItem("user"));
    setName(userName);
  };

  return (
    <header>
      <Link to="/">Bookstore</Link>
      <p>Hej, {name}!</p>
      <div>
        <Link to="/login" style={{ marginRight: "15px" }}>
          <button>Login</button>
        </Link>
        <Link to="/register">
          <button>Register</button>
        </Link>
      </div>
    </header>
  );
};

export default Header;
