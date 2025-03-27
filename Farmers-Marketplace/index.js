import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { UserState } from "./Context/user-context/UserState";

import { ProductProvider } from "./Context/Store/productContext";
import { UserAuthState } from "./Context/user-auth/UserAuthState";

// import { BuyerState } from "./Context/Buyer-context/BuyerState";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <BuyerState> */}
    <UserState>
      <ProductProvider>
        <UserAuthState>
        <BrowserRouter>
          <App />
        </BrowserRouter>
        </UserAuthState>
      </ProductProvider>
    </UserState>
    {/* </BuyerState> */}
  </React.StrictMode>
);
