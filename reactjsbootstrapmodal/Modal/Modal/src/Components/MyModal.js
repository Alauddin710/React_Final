import axios from "axios";
import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

export default function MyModal() {
  const [info, setInfo] = useState({
    modal: false,
    name: "",
    city: "",
  });

  function toggle() {
    setInfo({ modal: !info.modal });
  }
  function handleSubmit(e) {
    e.preventDefault();
    // console.log(info);
    toggle();
    dataSubmit();
  }
  function changeValue(e) {
    setInfo({ ...info, [e.target.name]: e.target.value });
  }
  function dataSubmit() {
    // console.log(info);
    axios
      .post("http://localhost/reactjsbootstrapmodal/api/post.php", {
        info,
      })
      .then((res) => {
        // console.log(res.data);
        alert(res.data.msg);
      });
  }

  return (
    <div className="form-group">
      <h1> My Modal Button</h1>
      <button onClick={toggle}>Click Here</button>

      <Modal isOpen={info.modal}>
        <form onSubmit={handleSubmit}>
          <ModalHeader>Hello This is Modal</ModalHeader>
          <ModalBody>
            <label>Name:</label>
            <input
              type="text"
              className="form-control"
              onChange={changeValue}
              name="name"
            />
            <label>City:</label>
            <input
              type="text"
              className="form-control"
              onChange={changeValue}
              name="city"
            />
          </ModalBody>
          <ModalFooter>
            <input type="submit" className="btn btn-info" value="Submit" />
            <Button onClick={toggle} className="btn btn-success">
              Close
            </Button>
          </ModalFooter>
        </form>
      </Modal>
    </div>
  );
}
