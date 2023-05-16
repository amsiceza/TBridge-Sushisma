import { useState } from "react";
import "./App.scss";
import Home from "./pages/Home/Home";
import Menu from "./pages/Menu/Menu";
import Admin from "./pages/Admin/Admin";
import Login from "./pages/Login/Login";
import Profile from "./pages/Profile/Profile";
import Cart from "./pages/Cart/Cart";


import AddProducts from "./components/Products/AddProducts/AddProducts";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ProductProvider } from "./context/ProductsContext/ProductState";
import { CategoryProvider } from "./context/CategoriesContext/CategoryState";
import { UserProvider } from "./context/UserContext/UserState";
import { OrdersProvider } from "./context/OrderContext/OrderState";


function App() {
  return (
    <>
      <div className="App">
        <BrowserRouter>
        <ProductProvider>
        <CategoryProvider>
        <UserProvider>
          <OrdersProvider>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/addProduct" element={<AddProducts />} />
            <Route path="/login" element={<Login />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
          </OrdersProvider>
          </UserProvider>
          </CategoryProvider>
        </ProductProvider>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
