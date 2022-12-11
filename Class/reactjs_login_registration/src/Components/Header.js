import React from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";

export default function Header() {
  let navigate = useNavigate();
  const logOut = () => {
    sessionStorage.clear();
    navigate("/login");
  };
  return (
    <>
      <div className="p-5 bg-primary text-white text-center">
        <h1>My First Bootstrap 5 Page</h1>
        <p>Resize this responsive page to see the effect!</p>
      </div>

      <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
        <div className="container-fluid">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link active" to="/home">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/login">
                Login
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/registration">
                Register
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link " to="/dashboard">
                DashBoard
              </Link>
            </li>
            <li className="nav-item">
              <a className="nav-link" onClick={logOut} href="#">
                LogOut
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <Outlet />
    </>
  );
}
