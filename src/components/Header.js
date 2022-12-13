import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <span>Logo</span>
      <Link to="/Login">
        <button>Login</button>
      </Link>
    </header>
  );
};

export default Header;
