import React from 'react'
import BeandLogo from '../assets/BeandLogo.png'
import "./header.css"
import Dock from '../AnimationComponent/Dock.jsx';
import { NavLink, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import axios from 'axios';
import UserContext from '../context/UserContext.js';
 


const items = [
    { icon: "", label: 'Home', onClick: () => alert('Home!') },
    { icon: "", label: 'Archive', onClick: () => alert('Archive!') },
    { icon: "", label: 'Profile', onClick: () => alert('Profile!') },
    { icon: "", label: 'Settings', onClick: () => alert('Settings!') },
  ];

function Header() {
  const {  setUser, loggedIn, setLoggedIn } =  useContext(UserContext);
  const navigate = useNavigate();

  const handleLogout = async (e) => {
    e.preventDefault();
    try {
      await axios.post("https://xoomart.onrender.com/api/v1/users/logout", {}, { withCredentials: true });
      setUser(null);
      setLoggedIn(false);
      navigate("/");
      
    } catch (error) {
      console.error("Logout error:", error);
    }
  };
  return (
    <>
    <div className='header'>
    
        <div className="header-left" >
          XooMart
        </div>
      
        <div className="header-mid">
            <div className='header-mid-left'>
              <NavLink className="navlink" to=""><button>Home</button></NavLink>
              <NavLink className="navlink" to="/products"><button>Product</button></NavLink>
              <NavLink className="navlink" to="/store"><button>Store</button></NavLink>
            </div>


          
            <div className='header-mid-right'>
              <input type="text" placeholder='Search Product' />
              <button>🔍</button>
            </div>
        </div>
        
        <div className="header-right">
          
            {loggedIn ? (
              <>
            <NavLink className="navlink" to="/cart"> <button>🛒</button></NavLink>
           <NavLink className="navlink" to="/profile">
          <button>👤</button>
        </NavLink>
        <NavLink className="navlink" to="/"
        onClick={handleLogout}>
          <button>Logout</button>
        </NavLink>
       </>
            
      ) : (
        <NavLink className="navlink" to="/login">
          <button>Login</button>
        </NavLink>
      )}
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