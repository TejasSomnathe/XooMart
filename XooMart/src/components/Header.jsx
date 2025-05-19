import React from 'react'
import BeandLogo from '../assets/BeandLogo.png'
import "./header.css"
function Header() {
  return (
    <>
    <div className='header'>
        <div className="logo" tabindex="0">
          <img className='logo-image' src={BeandLogo} alt="" />
        </div>
         <div className="search-container">
            <input type="text" placeholder="Search..." aria-label="Search" />
            <button aria-label="Search Button" title="Search">
            🔍
            </button>
         </div>
        <div className="header-buttons">
            <button type="button">Login</button>
            <button type="button">Create Shop</button>
            <button type="button">About Us</button>
        </div>
        
    </div>
    </>
  )
}

export default Header