import "./footer.css"
// import instagram from "../assets/instagram.jpeg"
// import facebook from "../assets/facebook.png"
// import twitter from "../assets/twitter.png"
import { NavLink } from "react-router-dom"
import { useContext } from "react"
import UserContext from "../context/UserContext.js"

import React from 'react'

function Footer() {
  const { loggedIn } = useContext(UserContext);
  return (
    <>
      <footer>
    <div className="footer-container">
      <div className="footer-section logo-section">
        <h2>XooMart</h2>
        <p>
          Connecting you with local stores and products in your district. Find what you need, where you need it.
        </p>
        <div className="social-icons">
          {/* <NavLink to="#" aria-label="Facebook"> <img src={instagram} alt="" /></NavLink>
          <NavLink to="#" aria-label="Twitter"> <img src={facebook} alt="" /></NavLink>
          <NavLink to="#" aria-label="Instagram"><img src={twitter} alt="" /></NavLink> */}
        </div>
      </div>

      <div className="footer-section footer-links">
        <h3>Quick Links</h3>
        <NavLink to="">Home</NavLink>
        <NavLink to="/api/v1/users/products">Products</NavLink>
        <NavLink to="/api/v1/users/store">Stores</NavLink>
        {loggedIn? (<NavLink to="/api/v1/users/cart">Cart</NavLink>):("")}
      </div>

      <div className="footer-section footer-links">
        <h3>Categories</h3>
        <NavLink to="#">Electronics</NavLink>
        <NavLink to="#">Clothing</NavLink>
        <NavLink to="#">Groceries</NavLink>
        <NavLink to="#">Home Goods</NavLink>
        <NavLink to="#">Health &amp; Beauty</NavLink>
      </div>

      <div className="footer-section">
        <h3>Contact Us</h3>
        <div className="contact-item">
          <i className="fas fa-map-marker-alt"></i>
          <span>District Wardha, Maharashtra, India</span>
        </div>
        <div className="contact-item">
          <i className="fas fa-phone-alt"></i>
          <span>+91 9673360709</span>
        </div>
        <div className="contact-item">
          <i className="fas fa-envelope"></i>
          <span>tejassomnathe@gmail.com</span>
        </div>
      </div>
    </div>

    <hr />
    <p className="footer-bottom">© 2025 XooMart. All rights reserved.</p>
  </footer></>
  )
}

export default Footer