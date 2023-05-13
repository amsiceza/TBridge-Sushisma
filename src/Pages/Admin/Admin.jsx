import React from 'react'
import Header from "../../components/Header/Header";
import AdminProducts from "../../components/Products/AdminProducts/AdminProducts";

import "./Admin.scss"


function Admin() {
  return (
    <div className='menu-container'>
            
            <Header />
            
        
        <div>
            <AdminProducts/>
        </div>

        
    </div>
  )
}

export default Admin