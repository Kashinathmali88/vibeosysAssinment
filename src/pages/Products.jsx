import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import SearchIcon from "../Icons/SearchIcon";

const Products = () => {
  const [filterPro, setFilterPro] = useState([]);
  const { products } = useSelector((state) => state.products);
  const [data, setData] = useState("");

  const handelFilter = () => {
    setFilterPro(
      products.filter(
        (p) =>
          p.category.toLowerCase().includes(data.toLowerCase()) ||
          p.name.toLowerCase().includes(data.toLowerCase())
      )
    );
  };

  useEffect(() => {
    handelFilter();
  }, [data]);

  return (
    <div className="p-10">
      <h1 className="text-3xl">Producst</h1>
      <div className="relative w-full">
        <span className="absolute top-[50%] left-7">
          <SearchIcon />
        </span>
        <input
          onChange={(e) => setData(e.target.value)}
          className="w-full border border-black px-15 py-2 mt-4"
          type="text"
          placeholder="Search product by name or category"
        />
      </div>

      <div className="mt-10">
        <p className="flex justify-end p-2">{products.length} products</p>
        <table className="border border-black w-full">
          <thead>
            <tr>
              <th className="border border-black py-2" colSpan={5}>
                All Products
              </th>
            </tr>
            <tr className="border-b border-black">
              <th className="px-4 py-2">No</th>
              <th className="px-4 py-2">Name</th>
              <th className="px-4 py-2">Category</th>
              <th className="px-4 py-2">Expiry Date</th>
              <th className="px-4 py-2">Cost</th>
            </tr>
          </thead>
          <tbody>
            {filterPro.map((p, index) => {
              return (
                <tr key={p.id} className="border-b border-black">
                  <td className="px-4 py-2">{index + 1}</td>
                  <td className="px-4 py-2">{p.name}</td>
                  <td className="px-4 py-2">{p.category}</td>
                  <td className="px-4 py-2">{p.date}</td>
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

export default Products;
