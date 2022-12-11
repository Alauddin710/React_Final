import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Registration() {
  const navigate = useNavigate();
  const [info, setInfo] = useState({
    fname: "",
    lname: "",
    email: "",
    password: "",
  });
  const changValue = (e) => {
    setInfo({ ...info, [e.target.name]: e.target.value });
  };
  const formSubmit = (e) => {
    e.preventDefault();
    axios
      .post(
        "http://localhost/React_Final/Class/reactjs_login_registration/api/registration.php",
        info
      )
      .then((res) => {
        //if (res.data) {

        if (res.data.empty) {
          alert(res.data.empty);
        }
        if (res.data.duplicate) {
          alert(res.data.duplicate);
        }
        if (res.data.success) {
          alert(res.data.success);
          navigate("/login");
        }
        // console.log(res.data);
        //alert(res.data);
        //navigate("/login");

        //}
      });
  };
  console.log(info);
  return (
    <div className="container">
      <h1>Registration Form</h1>
      <form onSubmit={formSubmit}>
        <label>Fist Name</label>
        <input
          type="text"
          name="fname"
          onChange={changValue}
          className="form-control"
        />

        <label>Last Name</label>
        <input
          type="text"
          name="lname"
          onChange={changValue}
          className="form-control"
        />
        <label>Eamil</label>
        <input
          type="text"
          name="email"
          onChange={changValue}
          className="form-control"
        />

        <label>Password</label>
        <input
          type="text"
          name="password"
          onChange={changValue}
          className="form-control"
        />

        <input type="submit" name="submit" value="Register" />
      </form>
    </div>
  );
}
