import React from 'react'
import Header from "../../components/Header/Header";
import GetProducts from "../../components/Products/GetProducts/GetProducts";
import Footer from "../../components/Footer/Footer";

import "./Menu.scss"

import { ProductProvider } from "../../context/ProductsContext/ProductState";

function Menu() {
  return (
    <div className='menu-container'>
        
            <Header />
      
        <div>
        
            <GetProducts />
          
        </div>

        <Footer />
        
    </div>
  )
}

export default Menu