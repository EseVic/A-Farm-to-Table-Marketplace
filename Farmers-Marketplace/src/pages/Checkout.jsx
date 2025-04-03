import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLIC_KEY);

export const Checkout = () => {
  const { cart } = useContext(CartContext);

  const handleCheckout = async () => {
    const stripe = await stripePromise;
    const response = await fetch("/create-checkout-session", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(cart),
    });
    const session = await response.json();
    await stripe.redirectToCheckout({ sessionId: session.id });
  };

  return (
    <div className="p-6 bg-yellow-100 min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-4">Checkout</h1>
      <button 
        onClick={handleCheckout}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Proceed to Payment
      </button>
    </div>
  );
};
