import { useState } from "react";
import "./App.scss";
import Home from "./pages/Home/Home";
import Menu from "./pages/Menu/Menu";
import Admin from "./pages/Admin/Admin";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ProductProvider } from "./context/ProductsContext/ProductState";


function App() {
  return (
    <>
      <div className="App">
        <BrowserRouter>
        <ProductProvider>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/admin" element={<Admin />} />
          </Routes>
        </ProductProvider>
          
        </BrowserRouter>



      </div>
    </>
  );
}

export default App;
