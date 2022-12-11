import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  // console.log(user);

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(user);
    axios
      .post(
        "http://localhost/React_Final/Class/reactjs_login_registration/api/login.php",
        user
      )
      .then((response) => {
        console.log(response.data);
        if (response.data.success) {
          console.log(response.data.user.email);

          sessionStorage.setItem("email", response.data.user.email);
          sessionStorage.setItem(
            "Full Name",
            response.data.user.fname + "" + response.data.user.lname
          );
          alert(response.data.success);
          navigate("/dashboard");
        } else {
          alert(response.data.error);
        }
        //console.log(response.data);
      });
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="mb-3 mt-3">
          <label for="email" className="form-label">
            Email:
          </label>
          <input
            type="email"
            name="email"
            onChange={handleChange}
            className="form-control"
            id="email"
            placeholder="Enter email"
          />
        </div>
        <div className="mb-3">
          <label for="pwd" className="form-label">
            Password:
          </label>
          <input
            type="password"
            className="form-control"
            id="pwd"
            placeholder="Enter password"
            name="password"
            onChange={handleChange}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}
