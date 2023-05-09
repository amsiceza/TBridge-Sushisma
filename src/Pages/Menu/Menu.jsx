import React from 'react'
import Header from "../../components/Header/Header";
import GetProducts from "../../components/Products/GetProducts/GetProducts";
import "./Menu.scss"

import { ProductProvider } from "../../context/ProductsContext/ProductState";

function Menu() {
  return (
    <div className='menu-container'>
        <div>
            <Header />
        </div>

        <div>
          <ProductProvider>
            <GetProducts />
          </ProductProvider>
        </div>
        
    </div>
  )
}

export default Menu