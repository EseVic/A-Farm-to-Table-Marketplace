


// import React, { useState, useEffect } from "react";
// import { db } from "../firebase/firebaseConfig";
// import { collection, getDocs } from "firebase/firestore";


// export const Products = () => {
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     const fetchProducts = async () => {
//       const productsCollection = collection(db, "products");
//       const productSnapshot = await getDocs(productsCollection);
//       const productList = productSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
//       setProducts(productList);
//     };

//     fetchProducts();
//   }, []);

//   return (
//     <div>
//       <h2 className="text-2xl font-bold">Products</h2>
//       {products.map((product) => (
//         <div key={product.id} className="border p-4 m-2">
//           <h3>{product.name}</h3>
//           <p>${product.price}</p>
//           <button className="bg-blue-500 text-white p-2">Add to Cart</button>
//         </div>
//       ))}
//     </div>
//   );
// };


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