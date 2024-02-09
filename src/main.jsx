import React from "react";
import ReactDOM from "react-dom"; // Correct import statement
import App from "./App.jsx";
import "./index.css";
import ShopContextProvider from "./contexts/shopContext.jsx"; // Capitalize ShopContextProvider

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ShopContextProvider> {/* Capitalize ShopContextProvider */}
      <App />
    </ShopContextProvider> {/* Capitalize ShopContextProvider */}
  </React.StrictMode>
);
