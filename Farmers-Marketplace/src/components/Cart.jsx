import React from "react";

export const Cart = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold">Shopping Cart</h2>
      <div className="cart-item">
        <span>Tomatoes</span>
        <span>$5</span>
      </div>
      <div className="cart-item">
        <span>Carrots</span>
        <span>$3</span>
      </div>
    </div>
  );
};