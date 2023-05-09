import React from 'react'
import "./Header.scss";
import Logo from "../../assets/logo.png"
import { Link } from "react-router-dom";



function Header() {
  return (
    <>
        <nav>
        <Link to="/"><img className='logo' src={Logo} alt="" /></Link>
            <div className='pages'>
                <Link to="/menu"><button className='link'>Menu</button></Link>
            </div>
        </nav>
    </>
  )
}

export default Header