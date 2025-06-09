// src/components/RegisterPage.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function RegisterPage() {
  const [formData, setFormData] = useState({
    username: '',
    shopname: '',
    email: '',
    fullname: '',
    password: '',
  });

  const [shopImage, setShopImage] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    setShopImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const data = new FormData();
      data.append('username', formData.username);
      data.append('shopname', formData.shopname);
      data.append('email', formData.email);
      data.append('fullname', formData.fullname);
      data.append('password', formData.password);
      if (shopImage) {
        data.append('shopImage', shopImage);
      }

      const response = await axios.post(
        '/api/v1/users/register',
        data,
        {
          withCredentials: true,
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }
      );

      if (response.data) {
        alert('Register successful!');
      } else {
        alert('Register failed: ' + response.data.message);
      }
    } catch (error) {
      console.error('Register error:', error);
      alert('An error occurred during registration.');
    }
  };

  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(135deg, #11998e, #38ef7d)',
        padding: '20px',
      }}
    >
      <form
        onSubmit={handleSubmit}
        style={{
          background: 'white',
          borderRadius: '16px',
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.25)',
          padding: '40px',
          width: '100%',
          maxWidth: '450px',
        }}
        encType="multipart/form-data"
      >
        <h2 style={{ textAlign: 'center', marginBottom: '20px', color: '#11998e' }}>
          Register
        </h2>

        {/* Text Inputs */}
        {[
          { label: 'Username', name: 'username', type: 'text' },
          { label: 'Shop Name', name: 'shopname', type: 'text' },
          { label: 'Email', name: 'email', type: 'email' },
          { label: 'Full Name', name: 'fullname', type: 'text' },
          { label: 'Password', name: 'password', type: 'password' },
        ].map((input) => (
          <div key={input.name} style={{ marginBottom: '16px' }}>
            <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold' }}>
              {input.label}
            </label>
            <input
              type={input.type}
              name={input.name}
              value={formData[input.name]}
              onChange={handleChange}
              placeholder={`Enter your ${input.label.toLowerCase()}`}
              required
              style={{
                width: '100%',
                padding: '12px',
                borderRadius: '8px',
                border: '1px solid #ccc',
                outline: 'none',
                transition: 'border-color 0.3s',
              }}
              onFocus={(e) => (e.target.style.borderColor = '#11998e')}
              onBlur={(e) => (e.target.style.borderColor = '#ccc')}
            />
          </div>
        ))}

        {/* Shop Image Upload */}
        <div style={{ marginBottom: '24px' }}>
          <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold' }}>
            Shop Image
          </label>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            style={{
              width: '100%',
              padding: '8px',
              borderRadius: '8px',
              border: '1px solid #ccc',
              outline: 'none',
              background: 'white',
            }}
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          style={{
            width: '100%',
            padding: '12px',
            borderRadius: '8px',
            border: 'none',
            background: 'linear-gradient(135deg, #11998e, #38ef7d)',
            color: 'white',
            fontWeight: 'bold',
            fontSize: '16px',
            cursor: 'pointer',
            transition: 'opacity 0.3s',
          }}
          onMouseOver={(e) => (e.target.style.opacity = '0.9')}
          onMouseOut={(e) => (e.target.style.opacity = '1')}
        >
          Register
        </button>

        {/* Back to Login link */}
        <p style={{ marginTop: '20px', textAlign: 'center', fontSize: '14px' }}>
          Already have an account?{' '}
          <Link
            to="/"
            style={{
              color: '#11998e',
              textDecoration: 'none',
              fontWeight: 'bold',
            }}
          >
            Login
          </Link>
        </p>
      </form>
    </div>
  );
}

export default RegisterPage;
