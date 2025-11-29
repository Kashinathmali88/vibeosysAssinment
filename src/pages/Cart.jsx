import React from "react";
import ProductCard from "../componets/ProductCard";
import { useSelector } from "react-redux";
import CartIcon from "../Icons/CartIcon";

const Cart = () => {
  const { products } = useSelector((state) => state.products);
  const { cart } = useSelector((state) => state.cart);
  return (
    <div className="p-10">
      <div className="flex justify-between">
        <h1 className="text-3xl">Add product to cart</h1>
        <p className="text-xl font-bold relative">
          <span className="text-red-500 text-2xl absolute bottom-10 right-0 animate-bounce">
            {cart.length}
          </span>
          <CartIcon />
        </p>
      </div>

      <div className="mt-10 grid gap-4 grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
        {products.map((item) => {
          return <ProductCard key={item.id} item={item} />;
        })}
      </div>
    </div>
  );
};

export default Cart;
