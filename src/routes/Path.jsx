import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Media from "../pages/Media";
import UserOverview from "../pages/UserOverview";
import UserCreate from "../pages/UserCreate";
import Profile from "../pages/Profile";
import ProfileEdit from "../pages/ProfileEdit";
import Login from "../pages/Login";
import Layout from "../Layout";
import Products from "../pages/Products";
import AddProducts from "../pages/AddProducts";
import StockControl from "../pages/StockControl";
import ManageBrands from "../pages/ManageBrands";

const Path = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="media" element={<Media />} />
          <Route path="user-overview" element={<UserOverview />} />
          <Route path="user-create" element={<UserCreate />} />
          <Route path="profile" element={<Profile />} />
          <Route path="profile-edit" element={<ProfileEdit />} />
          <Route path="products" element={<Products />} />
          <Route path="add-products" element={<AddProducts />} />
          <Route path="stock-control" element={<StockControl />} />
          <Route path="manage-brands" element={<ManageBrands />} />
        </Route>
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Path;
