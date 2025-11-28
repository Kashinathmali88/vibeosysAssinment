import React from "react";
import Nav from "./componets/Nav";
import { Route, Routes } from "react-router-dom";
import AddProduct from "./pages/AddProduct";
import Cart from "./pages/Cart";
import Products from "./pages/Products";

const App = () => {
  return (
    <div className="px-6 md:px-16 lg:px-36">
      <Nav />
      <Routes>
        <Route path="/" element={<AddProduct />} />
        <Route path="/products" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
};

export default App;
