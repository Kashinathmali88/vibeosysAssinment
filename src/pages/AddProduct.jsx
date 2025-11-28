import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { addProduct } from "../store/reducers/productSlice";

const AddProduct = () => {
  const { handleSubmit, register, reset } = useForm();
  const { products } = useSelector((state) => state.products);
  const dispatch = useDispatch();
  const onSubmit = (data) => {
    console.log(data);

    dispatch(addProduct(data));
    reset();
  };
  return (
    <div className="p-10 h-screen">
      <h1 className="text-3xl">Add new product</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex justify-between items-center mt-10">
          <div className="flex flex-col gap-2">
            <label htmlFor="name">Name</label>
            <input
              {...register("name")}
              className="border border-black"
              type="text"
              id="name"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="category">Category</label>
            <select
              {...register("category")}
              className="border border-black"
              id="category"
            >
              <option value="">--Please choose an option--</option>
              <option value="Snacks">Snacks</option>
              <option value="Beverages">Beverages</option>
              <option value="Dairy">Dairy</option>
              <option value="vegetables">vegetables</option>
            </select>
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="date">Expiry Date</label>
            <input
              {...register("date")}
              className="border border-black"
              type="date"
              id="date"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="price">Price</label>
            <input
              {...register("price")}
              className="border border-black"
              type="text"
              id="price"
            />
          </div>
        </div>

        <div className="mt-10 flex justify-center gap-4">
          <button className="bg-blue-600 px-6 py-2 rounded-md text-white text-sm active:scale-95">
            Save
          </button>
          <button
            onClick={() => reset()}
            className="bg-gray-600 px-6 py-2 rounded-md text-white text-sm active:scale-95"
          >
            Reset
          </button>
        </div>
      </form>
      <div className="mt-10">
        <table className="border border-black w-full">
          <thead>
            <tr className="border border-black text-center">All Products</tr>
            <tr className="border-b border-black">
              <td className="px-4 py-2">No</td>
              <td className="px-4 py-2">Name</td>
              <td className="px-4 py-2">Category</td>
              <td className="px-4 py-2">Expiry Date</td>
              <td className="px-4 py-2">Cost</td>
            </tr>
          </thead>
          <tbody>
            {products.map((p, index) => {
              return (
                <tr key={index} className="border-b border-black">
                  <td className="px-4 py-2">{index}</td>
                  <td className="px-4 py-2">{p.name}</td>
                  <td className="px-4 py-2">{p.category}</td>
                  <td className="px-4 py-2">{p.data}</td>
                  <td className="px-4 py-2">{p.price}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AddProduct;
