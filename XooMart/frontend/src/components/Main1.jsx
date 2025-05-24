import "./main1.css";
import electronics from "../assets/electronics.jpg";
import clothing from "../assets/clothing.png";
import groceries from "../assets/groceries.jpg";
import home from "../assets/home.png";
import health from "../assets/health.jpg";
import React from 'react'

function Main1() {
  return (
  <>
    <div className="container">
        <h1>Browse Categories</h1>
        <div className="categories">
            <div className="category">
                <div className="icon"><img src={electronics} alt="" /></div>
                <p>Electronics</p>
            </div>
            <div className="category">
                <div className="icon"><img src={clothing} alt="" /></div>
                <p>Clothing</p>
            </div>
            <div className="category">
                <div className="icon"><img src={groceries} alt="" /></div>
                <p>Groceries</p>
            </div>
            <div className="category">
                <div className="icon"><img src={home} alt="" /></div>
                <p>Home Goods</p>
            </div>
            <div className="category">
                <div className="icon"><img src={health} alt="" /></div>
                <p>Health & Beauty</p>
            </div>
        </div>
    </div>
</>
  )
}

export default Main1