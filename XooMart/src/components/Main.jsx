import React from 'react'
import "./main.css"
import men1 from "../assets/men1.jpeg"
import clothsDress from "../assets/clothsDress.jpg"

function Main() {
  return (
    <>
     

<section class="offers-bar" aria-label="Shop Offers">
  <div class="offers-track" aria-live="polite" aria-atomic="true" aria-relevant="all">
    <div class="offer-item">🔥 Flash Sale 40% OFF on All T-Shirts</div>
    <div class="offer-item">🎉 Buy 1 Get 1 Free on Selected Shirts</div>
    <div class="offer-item">📱 New Mobile Phone Models Arrived</div>
    <div class="offer-item">🚚 Free Shipping on Orders Over $50</div>
    <div class="offer-item">⏰ Limited Time Offer: Extra 10% OFF</div>
    <div class="offer-item">🔥 Flash Sale 40% OFF on All T-Shirts</div>
    <div class="offer-item">🎉 Buy 1 Get 1 Free on Selected Shirts</div>
  </div>
</section>

<main>
  <h2 class="section-title">Featured Products</h2>
  <div class="products-grid">
    <article class="product-card" tabindex="0" aria-label="T-Shirt Product">
      <div class="product-image">
        <img src={men1} alt="T-Shirt" />
      </div>
      <div class="product-info">
        <div class="product-name">Classic T-Shirt (combo)</div>
        <div class="product-description">Comfortable cotton t-shirt available in multiple colors.</div>
        <div class="product-price">$19.99</div>
      </div>
    </article>

    <article class="product-card" tabindex="0" aria-label="Shirt Product">
      <div class="product-image">
        <img src={clothsDress} alt="Shirt" />
      </div>
      <div class="product-info">
        <div class="product-name">One piece western top</div>
        <div class="product-description">Elegant Top perfect for small events.</div>
        <div class="product-price">$29.99</div>
      </div>
    </article>

    <article class="product-card" tabindex="0" aria-label="Mobile Phone Product">
      <div class="product-image">
        <img src="https://via.placeholder.com/160x140?text=Mobile+Phone" alt="Mobile Phone" />
      </div>
      <div class="product-info">
        <div class="product-name">Smartphone X100</div>
        <div class="product-description">Latest model with cutting-edge features and sleek design.</div>
        <div class="product-price">$499.99</div>
      </div>
    </article>
  </div>
</main>

    </>
  )
}

export default Main