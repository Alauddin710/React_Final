import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Edituser = (props) => {
  const navigate = useNavigate();
  const [userInfo, setuserInfo] = useState({
    name: props.list.name,
    email: props.list.email,
  });
  const onChangeValue = (e) => {
    setuserInfo({ ...userInfo, [e.target.name]: e.target.value });
  };
  // Inserting a new user into the Database.
  const submitUser = async (event) => {
    try {
      event.preventDefault();
      event.persist();
      axios
        .post(
          `http://localhost/wdpf51_reactjs/22nov2022/reactapp2/api/edituser.php`,
          {
            username: userInfo.name,
            useremail: userInfo.email,
            userids: props.list.id,
          }
        )
        .then((res) => {
          console.log(res.data);
          navigate(`/users`);
          return;
        });
    } catch (error) {
      throw error;
    }
  };

  return (
    <div>
      <form className="editForm" onSubmit={submitUser}>
        <h2 className="bg-dark text-light"> Edit User Form </h2>
        <div className="form-group">
          <label htmlFor="_name">Name</label>
          <input
            type="text"
            id="_name"
            name="name"
            value={userInfo.name}
            onChange={onChangeValue}
            placeholder="Enter name"
            autoComplete="off"
            required
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="_email">Email</label>
          <input
            type="email"
            id="_email"
            name="email"
            value={userInfo.email}
            onChange={onChangeValue}
            placeholder="Enter email"
            autoComplete="off"
            required
            className="form-control"
          />
        </div>
        <input
          className="btn btn-primary btn-lg"
          type="submit"
          value="UPDATE"
        />
      </form>
    </div>
  );
};

export default Edituser;
