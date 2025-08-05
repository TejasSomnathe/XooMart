import React, { useState } from 'react';
import axios from 'axios';

function Addproducts() {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: '',
    category: '',
    stockQuantity: '',
    imageUrl: null
  });

  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'imageUrl') {
      setFormData((prev) => ({
        ...prev,
        imageUrl: files[0]
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');
    setLoading(true);

    const form = new FormData();
    form.append('name', formData.name);
    form.append('description', formData.description);
    form.append('price', formData.price);
    form.append('category', formData.category);
    form.append('stockQuantity', formData.stockQuantity || 0);
    form.append('imageUrl', formData.imageUrl);

    try {
      const response = await axios.post(
        '/api/v1/users/addProduct', 
        form,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }
      );
      setMessage('✅ Product added successfully!');
      setFormData({
        name: '',
        description: '',
        price: '',
        category: '',
        stockQuantity: '',
        imageUrl: null
      });
    } catch (error) {
      setMessage('❌ Failed to add product: ' + (error.response?.data?.message || error.message));
    } finally {
      setLoading(false);
    }
  };

  const inputStyle = {
    width: '100%',
    padding: '10px',
    marginBottom: '12px',
    border: '1px solid #ccc',
    borderRadius: '8px',
    fontSize: '16px',
    boxSizing: 'border-box'
  };

  const labelStyle = {
    fontWeight: 'bold',
    marginBottom: '4px',
    display: 'block',
    color: '#333'
  };

  const formStyle = {
    maxWidth: '500px',
    margin: '0 auto',
    padding: '24px',
    backgroundColor: '#f9f9f9',
    borderRadius: '12px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
  };

  const buttonStyle = {
    background: 'linear-gradient(135deg, #9F44D3, #7B1FA2)',
    color: 'white',
    padding: '12px 20px',
    fontSize: '16px',
    fontWeight: 'bold',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    width: '100%',
    transition: 'all 0.3s ease'
  };

  return (
    <form onSubmit={handleSubmit} style={formStyle}>
      <div>
        <label style={labelStyle}>Name</label>
        <input style={inputStyle} type="text" name="name" value={formData.name} onChange={handleChange} required />
      </div>

      <div>
        <label style={labelStyle}>Description</label>
        <textarea style={{ ...inputStyle, height: '80px', resize: 'vertical' }} name="description" value={formData.description} onChange={handleChange} required />
      </div>

      <div>
        <label style={labelStyle}>Price (₹)</label>
        <input style={inputStyle} type="number" name="price" min="0" value={formData.price} onChange={handleChange} required />
      </div>

      <div>
        <label style={labelStyle}>Category</label>
        <input style={inputStyle} type="text" name="category" value={formData.category} onChange={handleChange} required />
      </div>

      <div>
        <label style={labelStyle}>Stock Quantity</label>
        <input style={inputStyle} type="number" name="stockQuantity" min="0" value={formData.stockQuantity} onChange={handleChange} />
      </div>

      <div>
        <label style={labelStyle}>Product Image</label>
        <input style={inputStyle} type="file" name="imageUrl" accept="image/*" onChange={handleChange} required />
      </div>

      <button type="submit" style={buttonStyle} disabled={loading}>
        {loading ? 'Submitting...' : 'Submit Product'}
      </button>

      {message && (
        <p style={{ marginTop: '12px', color: message.startsWith('✅') ? 'green' : 'red' }}>
          {message}
        </p>
      )}
    </form>
  );
}

export default Addproducts;
