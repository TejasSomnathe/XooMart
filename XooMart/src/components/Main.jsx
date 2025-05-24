import React from 'react'
import "./main.css"


function Main() {
  return (
    <>
    
  <section class="hero-section">
    <h1 class="hero-title">
      Find Products in Local <br />Stores Near You
    </h1>
    <p class="hero-subtitle">
      Discover what's available in your neighborhood and shop online or in-store
    </p>
    <div class="hero-buttons">
      <button class="browse-btn" type="button">
        🛍️
        Browse Products
      </button>
      <button class="browse-btn" type="button">
        🏪
        Create Store
      </button>
     
    </div>
  </section>

  <section class="search-section">
    <form class="search-form" aria-label="Find What You Need">
      <h2 class="sr-only">Find What You Need</h2>
      <div class="input-group search-product">
        <input
          type="search"
          placeholder="Search for products..."
          aria-label="Search for products"
        />
        <i class="fas fa-search"></i>
      </div>
      <div class="input-group search-location">
        <i class="fas fa-map-marker-alt"></i>
        <input
          type="text"
          placeholder="Your location"
          aria-label="Your location"
        />
      </div>
      <button type="submit" class="search-btn">
        <i class="fas fa-search"></i> Search
      </button>
    </form>
  </section>


</>
  )
}

export default Main