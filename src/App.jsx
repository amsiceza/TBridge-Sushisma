import { useState } from "react";
import "./App.scss";
import Home from "./pages/Home/Home";
import Menu from "./pages/Menu/Menu";


import { BrowserRouter, Route, Routes } from "react-router-dom";


function App() {
  return (
    <>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<Menu />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
