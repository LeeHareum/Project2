import React from "react";
import { Routes, Route, Navigate, Outlet } from "react-router-dom";
import Cart from "./pages/Cart/Cart";
import Login from "./pages/Login/Login";
import Main from "./pages/Main/Main/Main";
import ProductList from "./pages/Main/ProductList/ProductList";
import Order from "./pages/Order/Order";
import PM from "./pages/PM/PM";
import Register from "./pages/Register/Register";
import User from "./pages/User/User";
import HeaderLayout from "./pages/HeaderLayout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/main" replace />} />
      <Route path="/login" element={<Login />} />

      <Route element={<HeaderLayout />}>
        <Route path="/main" element={<Main />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/order" element={<Order />} />
        <Route path="/pm" element={<PM />} />
        <Route path="/register" element={<Register />} />
        <Route path="/user" element={<User />} />
      </Route>
    </Routes>
  );
}

export default App;
