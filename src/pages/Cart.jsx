import React from "react";
import ProductCard from "../componets/ProductCard";
import { useSelector } from "react-redux";

const Cart = () => {
  const { products } = useSelector((state) => state.products);
  return (
    <div className="p-10">
      <div className="flex justify-between">
        <h1 className="text-3xl">Add product to cart</h1>
        <p className="text-sm font-bold">
          <span className="text-red-500">3</span> Items in cart
        </p>
      </div>

      <div className="mt-10 grid gap-4 grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
        {products.map((item, index) => {
          return <ProductCard key={index} item={item} />;
        })}
      </div>
    </div>
  );
};

export default Cart;
