import React, { useState } from "react";

const sampleProducts = [
  { id: 1, name: "Tomatoes", price: 5 },
  { id: 2, name: "Carrots", price: 3 },
];

export const Products = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => setCart([...cart, product]);

  return (
    <div>
      <h2 className="text-2xl font-bold">Products</h2>
      {sampleProducts.map((product) => (
        <div key={product.id} className="product-card">
          <h3>{product.name}</h3>
          <p>${product.price}</p>
          <button className="btn-primary" onClick={() => addToCart(product)}>
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
};