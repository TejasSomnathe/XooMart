import React, { useEffect, useState } from 'react';
import axios from 'axios';

function MyProducts() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserProducts = async () => {
      try {
        const res = await axios.get('/api/v1/users/myProduct');
        console.log(res.data) // Auth middleware must be enabled
        setProducts(res.data.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchUserProducts();
  }, []);

  if (loading) return <p>Loading your products...</p>;

  if (products.length === 0) return <p>No products found.</p>;

  return (
    <div style={{ padding: '20px' }}>
      <h2>My Products</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
        {products.map((product) => (
          <div
            key={product._id}
            style={{
              border: '1px solid #ddd',
              borderRadius: '10px',
              padding: '16px',
              width: '250px',
              boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
            }}
          >
            <img
              src={product.imageUrl}
              alt={product.name}
              style={{ width: '100%', borderRadius: '8px' }}
            />
            <h4 style={{ margin: '10px 0 5px' }}>{product.name}</h4>
            <p style={{ fontSize: '14px', color: '#555' }}>{product.description}</p>
            <p><strong>₹{product.price}</strong></p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MyProducts;
