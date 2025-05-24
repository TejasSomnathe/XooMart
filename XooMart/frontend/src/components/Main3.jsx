import "./main3.css"
import AnimatedContent from '../AnimationComponent/AnimatedContent'

import React from 'react'

function Main3() {
  return (
    <>
       <div className="container">
        <h1>How It Works</h1>
        <div className="services">
            <AnimatedContent
    distance={100}
    direction="vertical"
    reverse={false}
    delay={200}
    config={{ tension: 90, friction: 20 }}
    initialOpacity={0.2}
    animateOpacity
    scale={0.7}
    threshold={0.1}
  >
            <div className="service">
                <div className="icon search-icon"></div>
                <h2>Search Products</h2>
                <p>Find the products you need by searching our extensive catalog.</p>
            </div>
</AnimatedContent>
            
             <AnimatedContent
    distance={100}
    direction="vertical"
    reverse={false}
    delay={400}
    config={{ tension: 90, friction: 20 }}
    initialOpacity={0.2}
    animateOpacity
    scale={0.7}
    threshold={0.1}
  >
            <div className="service">
                <div className="icon location-icon"></div>
                <h2>Locate Stores</h2>
                <p>Discover which local stores have the products in stock.</p>
            </div>
</AnimatedContent>        

 <AnimatedContent
    distance={100}
    direction="vertical"
    reverse={false}
    delay={600}
    config={{ tension: 90, friction: 20 }}
    initialOpacity={0.2}
    animateOpacity
    scale={0.7}
    threshold={0.1}
  >
            <div className="service">
                <div className="icon shop-icon"></div>
                <h2>Shop Your Way</h2>
                <p>Choose to buy online or visit the store in person.</p>
            </div>
</AnimatedContent>
        </div>
    </div>
    </>
  )
}

export default Main3