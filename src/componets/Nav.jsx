import React from "react";
import { Link } from "react-router-dom";
import CartIcon from "../Icons/CartIcon";

const Nav = () => {
  return (
    <div className="p-4 flex justify-between">
      <h1 className="text-3xl font-semibold">Logo</h1>
      <div className="flex items-center gap-10">
        <Link to={"/products"}>Products</Link>
        <Link to={"/"}>Add products</Link>
        <Link to={"cart"}>
          <CartIcon />
        </Link>
      </div>
    </div>
  );
};

export default Nav;
