import React from 'react'
import { FaFacebookF, FaPhoneAlt } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import "./Footer.scss"

function Footer() {
  return (
    <div className='container-footer'>
      <div className='copy'>
      <p>Copyright <span>&copy;</span> 2023 All Rights Reserved by <span>Sushisma</span></p>
      </div>
    <div className='social-net'>
      <a className='icon insta' href="https://www.instagram.com/amsiceza/"><BsInstagram/></a>
      <a className='icon facebook' href="https://github.com/amsiceza"><FaFacebookF /></a>
      <a className='icon whathsapp' href="https://github.com/amsiceza"><FaPhoneAlt /></a>
    </div>
      
    </div>
  )
}

export default Footer