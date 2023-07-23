import { Link } from "react-router-dom";
import "../../styles/Header.module.css";

const logo = "/typing.png";

export const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <img src={logo} alt="logo" />
          <div className="container">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/">About Us</Link>
            </li>
            <li>
              <Link to="/">Login</Link>
            </li>
          </div>
        </ul>
      </nav>
    </header>
  );
};
