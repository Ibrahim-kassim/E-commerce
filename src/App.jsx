import React from "react";
import Navbar from "./components/navbar/Navbar";
import "../src/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Shop from "./pages/shop/Shop";
import ShopCategory from "./pages/ShopCategory/ShopCategory";
import Product from "./pages/Product/Product";
import Cart from "./pages/cart/Cart";
import Login from "./pages/Login/Login";
const App = () => {
  return (
    <div className="app">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element = {<Shop/>} />
          <Route path="/mens" element={<ShopCategory categoty= "men"/>}/>
          <Route path="/womens" element={<ShopCategory categoty= "women"/>}/>
          <Route path="/kids" element={<ShopCategory categoty= "kid"/>}/>
          <Route path="/product" element={<Product/>}>
            <Route path=":product" element={<Product/>} />
          </Route>
          <Route path="/cart" element={<Cart/>}/>
          <Route path="/login" element={<Login/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
