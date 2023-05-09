import React from 'react'
import Header from "../../components/Header/Header";
import AllProducts from "../../components/Products/AllProducts/AllProducts";

import "./Admin.scss"

import { ProductProvider } from "../../context/ProductsContext/ProductState";

function Admin() {
  return (
    <div className='menu-container'>
        <div>
            <Header />
        </div>
        <div>
            <AllProducts/>
        </div>

        
        
    </div>
  )
}

export default Admin