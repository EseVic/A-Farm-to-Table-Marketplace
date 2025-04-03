import React, { useState, useContext } from "react";
import { ProductContext } from "../context/ProductContext";
import ProductCard from "../components/ProductCard";

export const Marketplace = () => {
  const { products } = useContext(ProductContext);
  const [search, setSearch] = useState("");

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-6 bg-green-100 min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-4">Marketplace</h1>
      <input
        type="text"
        placeholder="Search products..."
        className="w-full p-2 mb-4 border rounded-md"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};
