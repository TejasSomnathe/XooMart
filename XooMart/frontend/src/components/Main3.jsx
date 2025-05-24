import "./main3.css"

import React from 'react'

function Main3() {
  return (
    <>
       <div class="container">
        <h1>How It Works</h1>
        <div class="services">
            <div class="service">
                <div class="icon search-icon"></div>
                <h2>Search Products</h2>
                <p>Find the products you need by searching our extensive catalog.</p>
            </div>
            <div class="service">
                <div class="icon location-icon"></div>
                <h2>Locate Stores</h2>
                <p>Discover which local stores have the products in stock.</p>
            </div>
            <div class="service">
                <div class="icon shop-icon"></div>
                <h2>Shop Your Way</h2>
                <p>Choose to buy online or visit the store in person.</p>
            </div>
        </div>
    </div>
    </>
  )
}

export default Main3