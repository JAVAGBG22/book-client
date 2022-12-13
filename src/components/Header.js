import { Link } from "react-router-dom";
import "../styles/Header.css";

const Header = () => {
  return (
    <header>
      <Link to="/">Bookstore</Link>
      <Link to="/Login">
        <button>Login</button>
      </Link>
    </header>
  );
};

export default Header;
