import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../store/reducers/cartSlice";

const ProductCard = ({ item, key }) => {
  const { cart } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  return (
    <div className="w-54 p-4 bg-gray-200 rounded-md">
      <h1 className="text-2xl">{item.name}</h1>
      <p className="text-sm mt-2">{item.category}</p>
      <div className="flex justify-between mt-4">
        <p className="text-xl font-bold">$ {item.price}</p>
        <button className="bg-blue-600 px-6 py-2 rounded-md text-white text-sm active:scale-95">
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
