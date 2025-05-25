import "./footer.css"
// import instagram from "../assets/instagram.jpeg"
// import facebook from "../assets/facebook.png"
// import twitter from "../assets/twitter.png"

import React from 'react'

function Footer() {
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
          {/* <a href="#" aria-label="Facebook"> <img src={instagram} alt="" /></a>
          <a href="#" aria-label="Twitter"> <img src={facebook} alt="" /></a>
          <a href="#" aria-label="Instagram"><img src={twitter} alt="" /></a> */}
        </div>
      </div>

      <div className="footer-section footer-links">
        <h3>Quick Links</h3>
        <a href="#">Home</a>
        <a href="#">Products</a>
        <a href="#">Stores</a>
        <a href="#">Cart</a>
      </div>

      <div className="footer-section footer-links">
        <h3>Categories</h3>
        <a href="#">Electronics</a>
        <a href="#">Clothing</a>
        <a href="#">Groceries</a>
        <a href="#">Home Goods</a>
        <a href="#">Health &amp; Beauty</a>
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