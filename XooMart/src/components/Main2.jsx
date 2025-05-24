import "./main2.css";

import React from 'react'

function Main2() {
  return (
  <>
     <div class="container">
        <h1>Featured Products</h1>
        <div class="products">
            <div class="product-item">
                <img src="smartphone.jpg" alt="Smartphone X" />
                <h2>Smartphone X</h2>
                <p class="price">$799.99</p>
                <p>Latest smartphone with advanced features and high-resolution camera.</p>
                <p>Available at 2 stores</p>
                <button class="btn">View Details</button>
                <button class="btn add-to-cart">Add to Cart</button>
            </div>
            <div class="product-item">
                <img src="headphones.jpg" alt="Wireless Headphones" />
                <h2>Wireless Headphones</h2>
                <p class="price">$249.99</p>
                <p>Premium noise-cancelling wireless headphones with long battery life.</p>
                <p>Available at 3 stores</p>
                <button class="btn">View Details</button>
                <button class="btn add-to-cart">Add to Cart</button>
            </div>
            <div class="product-item">
                <img src="tshirt.jpg" alt="Casual T-Shirt" />
                <h2>Casual T-Shirt</h2>
                <p class="price">$24.99</p>
                <p>Comfortable cotton t-shirt for everyday wear.</p>
                <p>Available at 2 stores</p>
                <button class="btn">View Details</button>
                <button class="btn add-to-cart">Add to Cart</button>
            </div>
            <div class="product-item">
                <img src="laptop.jpg" alt="Laptop Pro" />
                <h2>Laptop Pro</h2>
                <p class="price">$1299.99</p>
                <p>High-performance laptop for professionals and gamers.</p>
                <p>Available at 2 stores</p>
                <button class="btn">View Details</button>
                <button class="btn add-to-cart">Add to Cart</button>
            </div>
        </div>
        <button class="btn view-all">View All</button>
    </div>
  </>
  )
}

export default Main2