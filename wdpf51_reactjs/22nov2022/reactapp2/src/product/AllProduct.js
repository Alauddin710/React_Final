import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const AllProduct = () => {
  const [product, setProduct] = useState([]);

  const [searchTerm, setSearchTerm] = useState("");
  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };
  const searchedProduct = product.filter(
    (pr) =>
      pr.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      pr.details.toLowerCase().includes(searchTerm.toLowerCase()) ||
      pr.price.toLowerCase().includes(searchTerm.toLowerCase())
  );

  console.log(product);

  useEffect(() => {
    allprod();
  }, []);
  const allprod = async () => {
    axios
      .get(
        "http://localhost/wdpf51_reactjs/22nov2022/reactapp2/api/allproducts.php"
      )
      .then((res) => {
        setProduct(res.data.datas.pr);
      });
  };

  const delconfirm = (id) => {
    delprod(id);
  };

  const delprod = async (id) => {
    axios
      .post(
        "http://localhost/wdpf51_reactjs/22nov2022/reactapp2/api/delproduct.php",
        {
          prodid: id,
        }
      )
      .then((res) => {
        alert(res.data.msg);
        allprod();
      });
  };

  return (
    <div className="col-sm-8">
      <h2 className="bg-dark text-light">All Products</h2>

      <label htmlFor="search">Search: </label>
      <input
        id="search"
        name="searchTerm"
        onChange={handleSearch}
        type="text"
      />

      <table className="table table-striped">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Details</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {searchedProduct.map((item, index) => (
            <tr key={item.id}>
              <td>{index + 1}</td>
              <td>{item.name}</td>
              <td>{item.details}</td>
              <td>{item.price}</td>
              <td>
                <Link
                  to={`/products/edit/${item.id}`}
                  className="btn btn-primary"
                >
                  Edit
                </Link>
                <button onClick={() => delconfirm(item.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Link to="/products/add" className="btn btn-secondary">
        Add new product
      </Link>
    </div>
  );
};

export default AllProduct;
