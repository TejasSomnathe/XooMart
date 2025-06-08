import React from 'react';
import './Product.css';
import axios from 'axios';

function Product(){

  // Fetch products from the API
  // const fetchProducts = async () => {
  //   try {
  //     const response = await axios.get('/api/v1/users/product');
  //     return response.data.products;
  //   } catch (error) {
  //     console.error('Error fetching products:', error);
  //     return [];
  //   }
  // }

  return (<>
  <section className="container" aria-label="Products section">
    <header>
      <h1>Products</h1>
      <p className="subtitle">Find products available in local stores near you</p>
    </header>
    <form className="search-form" role="search" aria-label="Search products">
      <label for="search" className="sr-only">Search products</label>
      <input
        type="search"
        id="search"
        name="search"
        placeholder="Search products..."
        autocomplete="off"
      />
      <button type="button" className="filters-btn" aria-label="Filters">
        <i className="fas fa-filter" aria-hidden="true"></i>
        <span>Filters</span>
      </button>
      <button type="submit" className="search-btn" aria-label="Search">
        <i className="fas fa-search" aria-hidden="true"></i>
        <span>Search</span>
      </button>
    </form>
    <p className="products-found">8 products found</p>
    <ul className="products-list" aria-label="Product list">
      <li className="product-card">
        <img
          src="https://storage.googleapis.com/a1aa/image/cc4a3254-6599-4518-437e-1442c59c2070.jpg"
          alt="Smartphone X front view showing apps on screen"
          loading="lazy"
          width="400"
          height="280"
        />
        <div className="content">
          <div className="header">
            <h2>Smartphone X</h2>
            <span className="price">$799.99</span>
          </div>
          <p className="description">
            Latest smartphone with advanced features and high-resolution camera.
          </p>
          <p className="store-info">
            <i className="fas fa-store" aria-hidden="true"></i> Available at 2 stores
          </p>
          <div className="actions">
            <a href="#" className="details-link">View Details</a>
            <button type="button" className="add-cart-btn">
              <i className="fas fa-shopping-cart" aria-hidden="true"></i> Add to Cart
            </button>
          </div>
        </div>
      </li>
      <li className="product-card">
        <img
          src="https://storage.googleapis.com/a1aa/image/f96dbc1f-9349-4df4-93d7-441f7b935580.jpg"
          alt="Wireless headphones on yellow background"
          loading="lazy"
          width="400"
          height="280"
        />
        <div className="content">
          <div className="header">
            <h2>Wireless Headphones</h2>
            <span className="price">$249.99</span>
          </div>
          <p className="description">
            Premium noise-cancelling wireless headphones with long battery life.
          </p>
          <p className="store-info">
            <i className="fas fa-store" aria-hidden="true"></i> Available at 3 stores
          </p>
          <div className="actions">
            <a href="#" className="details-link">View Details</a>
            <button type="button" className="add-cart-btn">
              <i className="fas fa-shopping-cart" aria-hidden="true"></i> Add to Cart
            </button>
          </div>
        </div>
      </li>  <li className="product-card">
        <img
          src="https://storage.googleapis.com/a1aa/image/3d0626fe-08b6-4cb6-04af-704e253e0622.jpg"
          alt="Casual T-Shirt with blue cat print on beige fabric"
          loading="lazy"
          width="400"
          height="280"
        />
        <div className="content">
          <div className="header">
            <h2>Casual T-Shirt</h2>
            <span className="price">$24.99</span>
          </div>
          <p className="description">Comfortable cotton t-shirt for everyday wear.</p>
          <p className="store-info">
            <i className="fas fa-store" aria-hidden="true"></i> Available at 2 stores
          </p>
          <div className="actions">
            <a href="#" className="details-link">View Details</a>
            <button type="button" className="add-cart-btn">
              <i className="fas fa-shopping-cart" aria-hidden="true"></i> Add to Cart
            </button>
          </div>
        </div>
      </li>
      <li className="product-card">
        <img
          src="https://storage.googleapis.com/a1aa/image/e97be71c-bcf3-4e06-a592-c38e704958b8.jpg"
          alt="Hand holding red organic apple with leaf in orchard"
          loading="lazy"
          width="400"
          height="280"
        />
        <div className="content">
          <div className="header">
            <h2>Organic Apples</h2>
            <span className="price">$4.99</span>
          </div>
          <p className="description">Fresh organic apples from local farms.</p>
          <p className="store-info">
            <i className="fas fa-store" aria-hidden="true"></i> Available at 2 stores
          </p>
          <div className="actions">
            <a href="#" className="details-link">View Details</a>
            <button type="button" className="add-cart-btn">
              <i className="fas fa-shopping-cart" aria-hidden="true"></i> Add to Cart
            </button>
          </div>
        </div>
      </li>
    </ul>
  </section>

  </>)
}

export default Product;