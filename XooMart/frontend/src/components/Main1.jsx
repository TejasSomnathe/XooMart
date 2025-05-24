import "./main1.css";


import React from 'react'

function Main1() {
  return (
  <>
    <div className="container">
        <h1>Browse Categories</h1>
        <div className="categories">
            <div className="category">
                <div className="icon"></div>
                <p>Electronics</p>
            </div>
            <div className="category">
                <div className="icon"></div>
                <p>Clothing</p>
            </div>
            <div className="category">
                <div className="icon"></div>
                <p>Groceries</p>
            </div>
            <div className="category">
                <div className="icon"></div>
                <p>Home Goods</p>
            </div>
            <div className="category">
                <div className="icon"></div>
                <p>Health & Beauty</p>
            </div>
        </div>
    </div>
</>
  )
}

export default Main1