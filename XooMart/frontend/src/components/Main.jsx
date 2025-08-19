  import React from 'react' 
import "./main.css"
import AnimatedContent from '../AnimationComponent/AnimatedContent'
import FadeContent from '../AnimationComponent/FadeContent'
 import Dock from '../AnimationComponent/Dock.jsx';
import { NavLink } from 'react-router-dom';

 

function Main() {
  return (
  <><section className="hero-section">



  <AnimatedContent
    distance={100}
    direction="vertical"
    reverse={true}
    config={{ tension: 90, friction: 20 }}
    initialOpacity={0.2}
    animateOpacity
    scale={0.7}
    threshold={0.1}
  >
    
    <h1 className="hero-title">
      Find Products in Local Stores Near You And<br /> Create Your Own Store
    </h1>
    <p className="hero-subtitle">
      Discover what's available in your neighborhood and shop online or in-store
    </p>
  </AnimatedContent>
  
   <AnimatedContent
    distance={100}
    direction="vertical"
    reverse={false}
    config={{ tension: 90, friction: 20 }}
    initialOpacity={0.2}
    animateOpacity
    scale={0.7}
    threshold={0.1}
  >
    <div className="hero-buttons">
      <NavLink to="/products"><button className="browse-btn" type="button">
        🛍️
        Browse Products
      </button></NavLink>
      <button className="browse-btn" type="button">
        🏪
        Create Store
      </button>
    </div></AnimatedContent>
  </section>



  
<FadeContent blur={true} duration={1000} easing="ease-out" initialOpacity={0}>
    <section className="search-section">
    <form className="search-form" aria-label="Find What You Need">
      <h2 className="sr-only">Find What You Need</h2>
      <div className="input-group search-product">
        <input
          type="search"
          placeholder="Search for products..."
          aria-label="Search for products"
          
        />
        <NavLink to="/imageSearch">
          
        <button>📸</button>
        </NavLink>
        <i className="fas fa-search"></i>
      </div>
      <div className="input-group search-location">
        <i className="fas fa-map-marker-alt"></i>
        <input
          type="text"
          placeholder="Your location"
          aria-label="Your location"
        />
      </div>
      <button type="submit" className="search-btn">
        <i className="fas fa-search"></i> Search
      </button>
    </form>
  </section>
</FadeContent>
 
</>
  )
}

export default Main