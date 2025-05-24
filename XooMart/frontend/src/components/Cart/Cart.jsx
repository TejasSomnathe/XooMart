import "./Cart.css";

function Cart(){
  return(
    <>
     <h1>Your Cart</h1>
  <div className="container">
    <section className="cart-items" aria-label="Cart Items">
      <header className="cart-header">
        <div>Cart Items (2)</div>
        <button className="clear-cart" type="button" aria-label="Clear Cart">
          <i className="fas fa-trash-alt" aria-hidden="true"></i> Clear Cart
        </button>
      </header>
      <ul className="cart-list">
        <li className="cart-item">
          <div className="item-info">
            <img src="https://placehold.co/80x80?text=Laptop+Pro" alt="Laptop Pro on wooden desk with neutral background" className="item-image" />
            <div>
              <div className="item-text">Laptop Pro</div>
              <div className="item-price-small">$1299.99</div>
            </div>
          </div>
          <div className="item-controls">
            <div className="quantity-controls" aria-label="Quantity controls for Laptop Pro">
              <button type="button" aria-label="Decrease quantity">−</button>
              <input type="text" value="1" readOnly aria-readonly="true" aria-label="Quantity" />
              <button type="button" aria-label="Increase quantity">+</button>
            </div>
            <div style={{textAlign:"right"}}>
              <div className="item-price-large">$1299.99</div>
              <button className="remove-btn" type="button" aria-label="Remove Laptop Pro from cart">
                <i className="fas fa-trash-alt" aria-hidden="true"></i> Remove
              </button>
            </div>
          </div>
        </li>
        <li className="cart-item">
          <div className="item-info">
            <img src="https://placehold.co/80x80/ffd600/000?text=Headphones" alt="Wireless headphones on bright yellow background" className="item-image" />
            <div>
              <div className="item-text">Wireless Headphones</div>
              <div className="item-price-small">$249.99</div>
            </div>
          </div>
          <div className="item-controls">
            <div className="quantity-controls" aria-label="Quantity controls for Wireless Headphones">
              <button type="button" aria-label="Decrease quantity">−</button>
              <input type="text" value="1" readOnly aria-readonly="true" aria-label="Quantity" />
              <button type="button" aria-label="Increase quantity">+</button>
            </div>
            <div style={{textAlign:"right"}}>
              <div className="item-price-large">$249.99</div>
              <button className="remove-btn" type="button" aria-label="Remove Wireless Headphones from cart">
                <i className="fas fa-trash-alt" aria-hidden="true"></i> Remove
              </button>
            </div>
          </div>
        </li>
      </ul>
    </section>  
    <aside className="order-summary" aria-label="Order Summary">
      <div>
        <h2>Order Summary</h2>
        <div className="summary-row">
          <div>Subtotal</div>
          <div>$1549.98</div>
        </div>
        <div className="summary-row">
          <div>Shipping</div>
          <div>$5.99</div>
        </div>
        <div className="summary-row" style={{borderBottom: "1px solid #e5e7eb", paddingBottom: "8px"}}>
          <div>Tax</div>
          <div>$124.00</div>
        </div>
        <div className="summary-row total">
          <div>Total</div>
          <div>$1679.97</div>
        </div>
        <div className="delivery-method">Delivery Method</div>
        <form className="delivery-options" aria-label="Delivery Method">
          <label className="delivery-option selected" htmlFor="home-delivery">
            <input type="radio" id="home-delivery" name="delivery" defaultChecked />
            <div className="delivery-text">
              <div className="delivery-title"><i className="fas fa-truck" style={{color:"#2563eb"}}></i> Home Delivery</div>
              <div className="delivery-desc">Delivery within 2-3 business days</div>
            </div>
          </label>
          <label className="delivery-option" htmlFor="store-pickup">
            <input type="radio" id="store-pickup" name="delivery" />
            <div className="delivery-text">
              <div className="delivery-title"><i className="fas fa-store" style={{color:"#2563eb"}}></i> Store Pickup</div>
              <div className="delivery-desc">Free pickup at selected store</div>
            </div>
          </label>
        </form>
      </div>
      <div>
        <button className="btn-checkout" type="button"><i className="fas fa-credit-card"></i> Proceed to Checkout</button>
        <button className="btn-continue" type="button">Continue Shopping <i className="fas fa-arrow-right"></i></button>
      </div>
    </aside>
  </div>
    </>
  )
}

export default Cart;