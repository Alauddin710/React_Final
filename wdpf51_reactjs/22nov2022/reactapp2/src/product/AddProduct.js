import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddProduct = () => {
  const navigate = useNavigate();
  const [prodinfo, prodinfSet] = useState({
    name: "",
    details: "",
    price: "",
  });

  //console.log(prodinfo);

  const onChangeValue = (e) => {
    prodinfSet({ ...prodinfo, [e.target.name]: e.target.value });
  };

  const SubmitValue = async (e) => {
    //alert("Submitted");
    e.preventDefault();
    e.persist();
    axios
      .post(
        "http://localhost/wdpf51_reactjs/22nov2022/reactapp2/api/addproduct.php",
        {
          pname: prodinfo.name,
          pdetails: prodinfo.details,
          pprice: prodinfo.price,
        }
      )
      .then((result) => {
        alert(result.data.msg);
        navigate("/products");
      });
  };

  return (
    <div className="col-sm-8">
      <h1>Product Entry Form</h1>
      <form onSubmit={SubmitValue}>
        <div className="form-group">
          <label>Product Name</label>
          <input
            type="text"
            name="name"
            onChange={onChangeValue}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label>Product Details</label>
          <textarea
            className="form-control"
            name="details"
            onChange={onChangeValue}
            type="text"
          ></textarea>
        </div>
        <div className="form-group">
          <label>Product Price</label>
          <input
            type="text"
            className="form-control"
            onChange={onChangeValue}
            name="price"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
