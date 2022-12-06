import "./App.css";
import { Link } from "react-router-dom";
function Sidebar() {
  return (
    <div className="col-sm-3 outline">
      <h2>About Me</h2>
      <h5>Photo of me:</h5>

      <h3 className="mt-4">Navigation</h3>

      <ul className="nav nav-pills flex-column">
        <li className="nav-item">
          <Link to="/" className="nav-link">
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
      </ul>
      <hr className="d-sm-none" />
    </div>
  );
}
export default Sidebar;
