import React, { useEffect, useState } from 'react';
import './Product.css';
import axios from 'axios';

function Product() {
  const [products, setProducts] = useState([]);
  const [inputValue, setInputValue] = useState('');

  // ✅ Add-to-Cart function
  const addToCart = async (productId) => {
    try {
      const response = await axios.post(`/api/v1/users/cart/add/${productId}`, {}, {
        withCredentials: true, // required if using cookies
      });
      console.log("Added to cart:", response.data);
      alert("✅ Product added to cart!");
    } catch (error) {
      console.error("Error adding to cart:", error);
      alert("❌ Failed to add to cart. Are you logged in?");
    }
  };

  // ✅ Search handler
  const handleSearch = async () => {
    try {
      const response = await axios.get(`/api/v1/users/products?search=${inputValue}`);
      setProducts(response.data);
      console.log("Search results:", response.data);
    } catch (error) {
      console.error("Search error:", error);
    }
  };

  useEffect(() => {
    axios.get('/api/v1/users/products')
      .then(response => {
        setProducts(response.data);
      })
      .catch(error => {
        console.error('Error fetching products:', error);
      });
  }, []);

  return (
    <section className="container" aria-label="Products section">
      <header>
        <h1>Products</h1>
        <p className="subtitle">Find products available in local stores near you</p>
      </header>

      {/* ✅ Updated form handling */}
      <form
        className="search-form"
        role="search"
        aria-label="Search products"
        onSubmit={(e) => {
          e.preventDefault();
          handleSearch();
        }}
      >
        <input
          type="search"
          id="search"
          name="search"
          placeholder="Search products..."
          autoComplete="on"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />

        {/* <button type="button" className="filters-btn">
          <i className="fas fa-filter"></i>
          <span>Filters</span>
        </button> */}

        <button type="submit" className="search-btn">
          <i className="fas fa-search"></i>
          <span>Search</span>
        </button>
      </form>

      <p className="products-found">{products.length} products found</p>
      <ul className="products-list">
        {products.map(product => (
          <li className="product-card" key={product._id}>
            <img
              src={product.imageUrl}
              alt={product.name}
              loading="lazy"
              width="400"
              height="280"
            />
            <div className="content">
              <div className="header">
                <h2>{product.name}</h2>
                <span className="price">${product.price}</span>
              </div>
              <p className="description">{product.description}</p>
              <p className="store-info">
                <i className="fas fa-store"></i> Only {product.stockQuantity} available
              </p>
              <div className="actions">
                <a href="#" className="details-link">View Details</a>
                <button
                  type="button"
                  className="add-cart-btn"
                  onClick={() => addToCart(product._id)}
                >
                  <i className="fas fa-shopping-cart"></i> Add to Cart
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Product;
