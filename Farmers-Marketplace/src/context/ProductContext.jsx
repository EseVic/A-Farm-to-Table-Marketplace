import { createContext, useState } from "react";

// Create the context
export const ProductContext = createContext();

// Provider component
export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([
    { id: 1, name: "Fresh vegetables", price: 5, image: "/fruits.jpg" },
    { id: 2, name: "Organic Tomatoes", price: 3, image: "/tomato.jpg" },
    { id: 3, name: "Garri", price: 7, image: "/garri.jpg" },
    { id: 9, name: "Dry Tomatoes", price: 7, image: "/drytomatoes.jpg" },
    { id: 4, name: "Long Grain Rice", price: 50, image: "/rice.png" },
    { id: 5, name: "Fresh Carrots/Potatoes", price: 5, image: "/veges.png" },
    { id: 6, name: "Livestock", price: 20, image: "/fowl.svg" },
    { id: 7, name: "Beans", price: 25, image: "/beans.jpg" },
    { id: 8, name: "cows", price: 200, image: "/cows.png" },
  ]);

  return (
    <ProductContext.Provider value={{ products, setProducts }}>
      {children}
    </ProductContext.Provider>
  );
};
