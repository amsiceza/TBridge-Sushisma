import React from 'react'
import "./Header.scss";
import Logo from "../../assets/logo.png"
import { Link } from "react-router-dom";



function Header() {
  return (
    <>
        <nav>
            <img className='logo' src={Logo} alt="" />
            <div className='pages'>
                <Link to="/Projects"><button className='link'>Menu</button></Link>
            </div>
        </nav>
    </>
  )
}

export default Header