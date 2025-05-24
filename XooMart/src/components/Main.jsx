import React from 'react'
import "./main.css"


function Main() {
  return (
    <>
    <html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Local Products Search</title>
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
  />
  <link rel="stylesheet" href="styles.css" />
</head>
<body>
  <section class="hero-section">
    <h1 class="hero-title">
      Find Products in Local <br />Stores Near You
    </h1>
    <p class="hero-subtitle">
      Discover what's available in your neighborhood and shop online or in-store
    </p>
    <div class="hero-buttons">
      <button class="browse-btn" type="button">
        <i class="fas fa-box-open"></i>
        Browse Products
      </button>
      <input class="hero-input" type="text" aria-label="Input field" />
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
</body>
</html>

</>
  )
}

export default Main