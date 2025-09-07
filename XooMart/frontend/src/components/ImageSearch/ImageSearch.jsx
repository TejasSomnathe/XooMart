import React, { useState } from "react";
import axios from "axios";
import "./ImageSearch.css"; 

function ImageSearch() {
  const [image, setImage] = useState(null);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
    setProducts([]);
    setMessage("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!image) {
      setMessage("Please select an image.");
      return;
    }
    setLoading(true);
    setMessage("");
    try {
      const formData = new FormData();
      formData.append("image", image);

      // Adjust the endpoint as per your backend
      const response = await axios.post(
        "/api/v1/users/imageSearch",
        formData,
        { headers: { "Content-Type": "multipart/form-data" } }
      );
      setProducts(response.data.products || []);
      if ((response.data.products || []).length === 0) {
        setMessage("No similar products found.");
      }
    } catch (error) {
      setMessage("Error searching products by image.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="image-search-container">
      <form onSubmit={handleSubmit} className="image-search-form">
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
        />
        <button type="submit" disabled={loading}>
          {loading ? "Searching..." : "Search by Image"}
        </button>
      </form>
      {message && <div className="image-search-message">{message}</div>}
      <div className="products-list">
        {products.map((product) => (
          <div key={product._id} className="product-card">
            {product.imageUrl && (
              <img src={product.imageUrl} alt={product.name} className="product-image" />
            )}
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <span>₹{product.price}</span>
            <p>{product.category}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ImageSearch;