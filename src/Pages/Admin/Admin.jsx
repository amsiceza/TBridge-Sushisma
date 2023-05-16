import React from 'react'
import Header from "../../components/Header/Header";
import AdminProducts from "../../components/Products/AdminProducts/AdminProducts";
import Footer from "../../components/Footer/Footer";

import "./Admin.scss"


function Admin() {
  return (
    <div className='menu-container'>
            
            <Header />
            
        
        <div>
            <AdminProducts/>
        </div>

        <Footer />

        
    </div>
  )
}

export default Admin