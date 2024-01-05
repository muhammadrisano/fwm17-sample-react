import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/auth/Login/Login";
import Register from "./pages/auth/Register/Register";
import Home from "./pages/main/Home/Home";
import Profile from "./pages/main/Profile/Profile";
import Products from "./pages/main/Product/Products";
import Main from "./pages/main";
import ListProduct from "./pages/main/ListProduct";
import AddPost from "./pages/main/AddPost";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/main" element={<Main />}>
          <Route path="profile" element={<Profile />} />
          <Route path="products/:id" element={<Products />} />
          <Route path="list" element={<ListProduct/>} />
          <Route path="post/add" element={<AddPost />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
