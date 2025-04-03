import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

const ProductCard = ({ product }) => {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <img src={product.image} alt={product.name} className="w-full h-40 object-cover mb-2 rounded-md" />
      <h2 className="text-lg font-bold">{product.name}</h2>
      <p className="text-green-600 font-semibold">${product.price}</p>
      <button 
        onClick={() => addToCart(product)}
        className="mt-2 bg-blue-500 text-white px-3 py-1 rounded"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
