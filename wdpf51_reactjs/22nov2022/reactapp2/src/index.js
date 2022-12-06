import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Home from "./pages/Home";
import About from "./pages/About";
import Garage from "./pages/Garage";
import Contact from "./pages/Contact";
import Colors from "./components/colors/colors";
import reportWebVitals from "./reportWebVitals";
import LifeCycle from "./components/LifeCycle/LifeCycle";
import UserList from "./users/UserList";
import Adduser from "./users/Adduser";
import Edit from "./users/Edit";
import AllProduct from "./product/AllProduct";
import AddProduct from "./product/AddProduct";
import Comp1 from "./components/Comp1";
import EditProduct from "./product/EditProduct";

export default function RouterApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/cars" element={<Garage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/colors" element={<Colors />} />
          <Route path="/lifecycle" element={<LifeCycle />} />
          <Route path="/users" element={<UserList />} />
          <Route path="/adduser" element={<Adduser />} />
          <Route path="/users/edit/:uid" element={<Edit />} />
          <Route path="/products" element={<AllProduct />} />
          <Route path="/products/add" element={<AddProduct />} />
          <Route path="/products/edit/:pid" element={<EditProduct />} />
          <Route path="/testcomp" element={<Comp1 />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterApp />);

reportWebVitals();
