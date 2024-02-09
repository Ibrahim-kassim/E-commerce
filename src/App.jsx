// App.jsx
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Shop from './pages/shop/Shop';
import ShopCategory from './pages/ShopCategory/ShopCategory';
import Product from './pages/Product/Product';
import Cart from './pages/cart/Cart';
import Login from './pages/Login/Login';
import banner_kids from './assets/banner_kids.png';
import banner_womens from './assets/banner_women.png';
import banner_mens from './assets/banner_mens.png';

const App = () => {
  return (
    <div className="app">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route path="/mens" element={<ShopCategory banner={banner_mens} category="men" />} />
          <Route path="/womens" element={<ShopCategory banner={banner_womens} category="women" />} />
          <Route path="/kids" element={<ShopCategory banner={banner_kids} category="kid" />} />
          <Route path="/product" element={<Product />}>
            <Route path=":product" element={<Product />} />
          </Route>
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
