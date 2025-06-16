import React from 'react';
import './Product.css';
import axios from 'axios';
import  { useEffect, useState } from 'react';




function Product() {
  const [products, setProducts] = useState([]);
  const [inputValue, setInputValue] = useState('');

    const handleSearch = async () => {
    try {
       
      const response = await axios.get(`/api/v1/users/products?search=${inputValue}`);
      setProducts(response.data);
      console.log("Search results:", response.data);
       
    } catch (error) {
      console.error("Search error:", error);
    }
  }

  useEffect(() => {
    axios.get('/api/v1/users/products')
      .then(response => {
       
        setProducts(response.data);
        
        
      })
      .catch(error => {
        console.error('Error fetching products:', error);
   
      });
  }, []);
 

  

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
        autocomplete="on"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button type="button" className="filters-btn" aria-label="Filters">
        <i className="fas fa-filter" aria-hidden="true"></i>
        <span>Filters</span>
      </button>
      <button type="submit" className="search-btn" aria-label="Search" onClick={handleSearch}>
        <i className="fas fa-search" aria-hidden="true"></i>
        <span>Search</span>
      </button>
    </form>
    <p className="products-found">{products.length} products found</p>
    <ul className="products-list" aria-label="Product list">
      {products.map(product => (
        <li className="product-card">
        <img
          src={product.imageUrl}
          alt="Smartphone X front view showing apps on screen"
          loading="lazy"
          width="400"
          height="280"
        />
        <div className="content">
          <div className="header">
            <h2>{product.name}</h2>
            <span className="price">${product.price}</span>
          </div>
          <p className="description">
           {product.description }
          </p>
          <p className="store-info">
            <i className="fas fa-store" aria-hidden="true"></i> Only {product.stockQuantity} available
          </p>
          <div className="actions">
            <a href="#" className="details-link">View Details</a>
            <button type="button" className="add-cart-btn">
              <i className="fas fa-shopping-cart" aria-hidden="true"></i> Add to Cart
            </button>
          </div>
        </div>
      </li>
      ))}
    
    </ul>
  </section>

  </>)
}

export default Product;

// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// function Product() {
//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     axios.get('/api/v1/users/products')
//       .then(response => {
//         setProducts(response.data.products);
//         setLoading(false);
//       })
//       .catch(error => {
//         console.error('Error fetching products:', error);
//         setLoading(false);
//       });
//   }, []);

//   if (loading) return <div>Loading...</div>;

//   return (
//     <div className="p-8">
//       <h2 className="text-2xl font-bold mb-6">All Products</h2>
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
//         {products.map(product => (
//           <div key={product._id} className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center">
//             <img
//               src={product.imageUrl}
//               alt={product.name}
//               className="w-40 h-40 object-cover mb-4 rounded"
//             />
//             <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
//             <p className="text-gray-600 mb-2">{product.description}</p>
//             <span className="text-blue-600 font-bold mb-2">₹{product.price}</span>
//             <span className="text-xs text-gray-500 mb-2">Stock: {product.stockQuantity}</span>
//             <button className="mt-auto bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
//               Add to Cart
//             </button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Product;