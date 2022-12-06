import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const EditProduct = () => {
  const params = useParams();
  const [product, setProduct] = useState([]);

  //console.log(product);

  useEffect(() => {
    productone(params.pid);
  });
  //console.log("MyID:" + params.pid);
  const productone = (id) =>
    axios
      .post(
        "http://localhost/wdpf51_reactjs/22nov2022/reactapp2/api/getproduct.php",
        { prid: id }
      )
      .then((res) => {
        setProduct(res.data.product.prdata[0]);
        //console.log(res.data.product.prdata[0]);
      })
      .catch((error) => console.log(error));

  return (
    <div className="col-sm-8">
      <h1>Edit Product</h1>
      <form>
        <div className="form-group">
          <label>Product Name</label>
          <input
            type="text"
            name="name"
            value={product.name}
            onChange={(e) => setProduct(e.target.value)}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label>Product Details</label>
          <textarea
            className="form-control"
            name="details"
            value={product.details}
            onChange={(e) => setProduct(e.target.value)}
            type="text"
          ></textarea>
        </div>
        <div className="form-group">
          <label>Product Price</label>
          <input
            type="text"
            className="form-control"
            onChange={(e) => setProduct(e.target.value)}
            name="price"
            value={product.price}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Update
        </button>
      </form>
    </div>
  );
};

export default EditProduct;
