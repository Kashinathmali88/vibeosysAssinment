import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const Products = () => {
  const [filterPro, setFilterPro] = useState([]);
  const { products } = useSelector((state) => state.products);
  const [data, setData] = useState("");

  const handelFilter = () => {
    setFilterPro(products.filter((p) => p.category || p.name === data));
  };

  useEffect(() => {
    handelFilter();
  }, [data]);
  return (
    <div className="p-10">
      <h1 className="text-3xl">Producst</h1>
      <input
        onChange={(e) => setData(e.target.value)}
        className="w-full border border-black px-4 py-2 mt-4"
        type="text"
        placeholder="Search product by name or category"
      />

      <div className="mt-10">
        <p className="flex justify-end p-2">{products.length} products</p>
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
            {filterPro.map((p, index) => {
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

export default Products;
