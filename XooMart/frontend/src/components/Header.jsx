import React from 'react'
import BeandLogo from '../assets/BeandLogo.png'
import "./header.css"
import Dock from '../AnimationComponent/Dock.jsx';
import { NavLink } from 'react-router-dom';
 


const items = [
    { icon: "", label: 'Home', onClick: () => alert('Home!') },
    { icon: "", label: 'Archive', onClick: () => alert('Archive!') },
    { icon: "", label: 'Profile', onClick: () => alert('Profile!') },
    { icon: "", label: 'Settings', onClick: () => alert('Settings!') },
  ];

function Header() {
  return (
    <>
    <div className='header'>
        <div className="header-left">
          XooMart
        </div>
        
        <div className="header-mid">
            <div className='header-mid-left'>
              <NavLink className="navlink" to="/api/v1/users/"><button>Home</button></NavLink>
              <NavLink className="navlink" to="/api/v1/users/product"><button>Product</button></NavLink>
              <NavLink className="navlink" to="/api/v1/users/store"><button>Store</button></NavLink>
            </div>


          
            <div className='header-mid-right'>
              <input type="text" placeholder='Search Product' />
              <button>🔍</button>
            </div>
        </div>
        
        <div className="header-right">
         <NavLink className="navlink" to="/api/v1/users/cart"> <button>🛒</button></NavLink>
          <NavLink className="navlink" to="/api/v1/users/login"><button>Login</button></NavLink>
        </div>
    </div>
    <div className="dock">
      
        <Dock className='dock'
          items={items}
          panelHeight={10}
          baseItemSize={20}
          magnification={0}
        />
    </div>
    </>
  )
}

export default Header