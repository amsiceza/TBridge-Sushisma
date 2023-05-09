import React from 'react'
import Header from "../../components/Header/Header";
import Products from "../../components/Products/Products";
import "./Menu.scss"

import { GlobalProvider } from "../../context/ProductState";

function Menu() {
  return (
    <div className='menu-container'>
        <div>
            <Header />
        </div>

        <div>
          <GlobalProvider>
            <Products />
          </GlobalProvider>
        </div>
        
    </div>
  )
}

export default Menu