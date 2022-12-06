import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
      <div className="container-fluid">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to="/" className="nav-link active">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-link">
              About us
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/cars" className="nav-link">
              All Cars
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className="nav-link">
              Contact us
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/colors" className="nav-link">
              Colors
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/lifecycle" className="nav-link">
              LifeCycle
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/users" className="nav-link">
              User List
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/products" className="nav-link">
              Products
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
