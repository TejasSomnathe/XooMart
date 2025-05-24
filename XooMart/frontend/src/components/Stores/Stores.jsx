import React from 'react';
import './Stores.css';

function Stores() {
  return (
    <>
     <div style={{ maxWidth: '1120px', margin: '0 auto' }}>
    <h2>Local Stores</h2>
    <p className="subtitle">Find stores in your area with the products you need</p>
    <form className="search-form" role="search" aria-label="Search stores">
      <div style={{ position: 'relative', flexGrow: 1, minWidth: 0 }}>
        <input
          type="text"
          id="search"
          name="search"
          placeholder="Search stores by name or location..."
          aria-label="Search stores by name or location"
        />
        <i className="fas fa-search search-icon" aria-hidden="true"></i>
      </div>
      <button type="button" className="near-me" aria-label="Find stores near me">
        <i className="fas fa-map-marker-alt" aria-hidden="true"></i> Near Me
      </button>
      <button type="submit" className="search-btn" aria-label="Search stores">
        <i className="fas fa-search" aria-hidden="true"></i> Search
      </button>
    </form>
    <p className="stores-found">5 stores found</p>
    <div className="view-toggle" role="group" aria-label="View toggle">
      <button type="button" aria-pressed="true">
        <i className="fas fa-list" aria-hidden="true"></i> List
      </button>
      <button type="button" aria-pressed="false">
        <i className="fas fa-map" aria-hidden="true"></i> Map
      </button>
    </div>
    <div className="stores-grid">
    
      <article className="store-card" aria-label="TechWorld store">
        <img
          src="https://storage.googleapis.com/a1aa/image/401de0fb-42ea-409c-6f8d-1f20366d3ff1.jpg"
          alt="Paper maps and navigation charts spread out on a table"
          width="600"
          height="192"
        />
        <div className="store-content">
          <h3>TechWorld</h3>
          <p className="store-info">
            <i className="fas fa-map-marker-alt" aria-hidden="true"></i>
            123 Main Street, New York, NY 10001
          </p>
          <p className="store-info">
            <i className="far fa-clock" aria-hidden="true"></i>
            Mon-Sat: 9AM-9PM, Sun: 10AM-6PM
          </p>
          <p className="store-info phone">
            <i className="fas fa-phone-alt" aria-hidden="true"></i>
            (212) 555-1234
          </p>
          <div className="store-footer">
            <span>3 products available</span>
            <div className="store-buttons">
              <button type="button" className="btn-directions">
                <i className="fas fa-map-marker-alt" aria-hidden="true"></i> Directions
              </button>
              <button type="button" className="btn-view-store">
                <i className="fas fa-external-link-alt" aria-hidden="true"></i> View Store
              </button>
            </div>
          </div>
        </div>
      </article>
      
      <article className="store-card" aria-label="Fashion Hub store">
        <img
          src="https://storage.googleapis.com/a1aa/image/cd8db2b0-1f39-49b1-3624-7ac66ab61fb8.jpg"
          alt="Interior of a fashion store with clothes racks and bright lighting"
          width="600"
          height="192"
        />
        <div className="store-content">
          <h3>Fashion Hub</h3>
          <p className="store-info">
            <i className="fas fa-map-marker-alt" aria-hidden="true"></i>
            456 Broadway, New York, NY 10013
          </p>
          <p className="store-info">
            <i className="far fa-clock" aria-hidden="true"></i>
            Mon-Sun: 10AM-8PM
          </p>
          <p className="store-info phone">
            <i className="fas fa-phone-alt" aria-hidden="true"></i>
            (212) 555-5678
          </p>
          <div className="store-footer">
            <span>3 products available</span>
            <div className="store-buttons">
              <button type="button" className="btn-directions">
                <i className="fas fa-map-marker-alt" aria-hidden="true"></i> Directions
              </button>
              <button type="button" className="btn-view-store">
                <i className="fas fa-external-link-alt" aria-hidden="true"></i> View Store
              </button>
            </div>
          </div>
        </div>
      </article> <article className="store-card" aria-label="Gadget Galaxy store">
        <img
          src="https://storage.googleapis.com/a1aa/image/3917e526-8a0c-4ee6-f581-2b5538de4cce.jpg"
          alt="Open laptop with colorful screen glowing in a dark room"
          width="600"
          height="192"
        />
        <div className="store-content">
          <h3>Gadget Galaxy</h3>
          <p className="store-info">
            <i className="fas fa-map-marker-alt" aria-hidden="true"></i>
            789 5th Avenue, New York, NY 10022
          </p>
          <p className="store-info">
            <i className="far fa-clock" aria-hidden="true"></i>
            Mon-Fri: 8AM-10PM, Sat-Sun: 9AM-9PM
          </p>
          <p className="store-info phone">
            <i className="fas fa-phone-alt" aria-hidden="true"></i>
            (212) 555-9012
          </p>
          <div className="store-footer">
            <span>4 products available</span>
            <div className="store-buttons">
              <button type="button" className="btn-directions">
                <i className="fas fa-map-marker-alt" aria-hidden="true"></i> Directions
              </button>
              <button type="button" className="btn-view-store">
                <i className="fas fa-external-link-alt" aria-hidden="true"></i> View Store
              </button>
            </div>
          </div>
        </div>
      </article>
    </div>
  </div>
    
    </>
  );
}

export default Stores;