import React from 'react'
import Header from "../../components/Header/Header";
import Products from "../../components/Products/GetProducts/GetProducts";
import "./Menu.scss"

import { ProductProvider } from "../../context/ProductsContext/ProductState";

function Products() {
  return (
    <div className='menu-container'>
        <div>
            <Header />
        </div>

        <div>
          <ProductProvider>
            <Products />
          </ProductProvider>
        </div>
        
    </div>
  )
}

export default Products