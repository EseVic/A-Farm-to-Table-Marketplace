import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const stripePromise = loadStripe("your-stripe-public-key");

export const Checkout = () => {
  return (
    <Elements stripe={stripePromise}>
      <div className="p-6 text-center">
        <h2 className="text-2xl font-bold">Checkout Page</h2>
        <p>Payment integration coming soon!</p>
      </div>
    </Elements>
  );
};

