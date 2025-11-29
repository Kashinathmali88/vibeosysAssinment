import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../store/reducers/cartSlice";

const ProductCard = ({ item }) => {
  const { cart } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  return (
    <div className="w-54 p-4 bg-gray-200 rounded-md">
      <h1 className="text-2xl">{item.name}</h1>
      <p className="text-sm mt-2">{item.category}</p>
      <div className="flex justify-between mt-4">
        <p className="text-xl font-bold">$ {item.price}</p>
        {cart.some((p) => p.id === item.id) ? (
          <button
            onClick={() => dispatch(removeFromCart({ id: item.id }))}
            className="bg-red-600 px-4 py-2 rounded-md text-white text-sm active:scale-95"
          >
            Remove to cart
          </button>
        ) : (
          <button
            onClick={() => dispatch(addToCart({ id: item.id }))}
            className="bg-blue-600 px-6 py-2 rounded-md text-white text-sm active:scale-95"
          >
            Add to cart
          </button>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
