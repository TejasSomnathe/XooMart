import React from 'react'
import BeandLogo from '../assets/BeandLogo.png'
import "./header.css"
function Header() {
  return (
    <>
    <div className='header'>
        <div className="header-left">
          XooMart
        </div>
        
        <div className="header-mid">
            <div className='header-mid-left'>
              <button>Home</button>
              <button>Product</button>
              <button>Store</button>
            </div>
          
            <div className='header-mid-right'>
              <input type="text" placeholder='Search Product' />
              <button>🔍</button>
            </div>
        </div>
        
        <div className="header-right">
          <button>🛒</button>
          <button>Login</button>
        </div>
    </div>
    </>
  )
}

export default Header