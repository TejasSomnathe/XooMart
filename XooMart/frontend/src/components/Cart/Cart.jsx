import "./Cart.css";
import React, { useEffect, useState } from "react";
import axios from "axios";

function Cart() {
  const [cart, setCart] = useState(null);

    const subtotal = cart?.products?.reduce((acc, item) => {
    const price = item.productId?.price || 0;
    const quantity = item.quantity || 1;
    return acc + price * quantity;
  }, 0);

  const shippingFee = 5.99;
  const tax = Math.round(subtotal * 0.18); // 18% GST
  const total = subtotal + shippingFee + tax;

  useEffect(() => {
  

    fetchCart();
  }, []);

  const fetchCart = async () => {
    try {
      const res = await axios.get("/api/v1/users/cart", { withCredentials: true });
      setCart(res.data.cart);
    } catch (err) {
      console.error("Failed to load cart", err);
    }
  };

  const updateQuantity = async (productId, change) => {
    try {
      await axios.put(`/api/v1/users/cart/update/${productId}`, { change }, { withCredentials: true });
      fetchCart(); // refresh cart
    } catch (err) {
      console.error("Failed to update quantity", err);
    }
  };

  const removeItem = async (productId) => {
    try {
      await axios.delete(`/api/v1/users/cart/remove/${productId}`, { withCredentials: true });
      fetchCart();
    } catch (err) {
      console.error("Failed to remove item", err);
    }
  };

  const clearCart = async () => {
    try {
      await axios.delete("/api/v1/users/cart/clear", { withCredentials: true });
      fetchCart();
    } catch (err) {
      console.error("Failed to clear cart", err);
    }
  };

  if (!cart) return <p>Loading cart...</p>;

  return (
    <>
      <h1>Your Cart</h1>
      <div className="container">
        <section className="cart-items">
          <header className="cart-header">
            <div>Cart Items ({cart.products.length})</div>
            <button className="clear-cart" onClick={clearCart}>Clear Cart</button>
          </header>
          <ul className="cart-list">
            {cart.products.map((item) => (
              <li className="cart-item" key={item.productId._id}>
                <div className="item-info">
                  <img src={item.productId.imageUrl} alt={item.productId.name} className="item-image" />
                  <div>
                    <div className="item-text">{item.productId.name}</div>
                    <div className="item-price-small">${item.productId.price}</div>
                  </div>
                </div>
                <div className="item-controls">
                  <div className="quantity-controls">
                    <button onClick={() => updateQuantity(item.productId._id, -1)}>−</button>
                    <input type="text" value={item.quantity} readOnly />
                    <button onClick={() => updateQuantity(item.productId._id, 1)}>+</button>
                  </div>
                  <div style={{ textAlign: "right" }}>
                    <div className="item-price-large">${(item.productId.price * item.quantity).toFixed(2)}</div>
                    <button className="remove-btn" onClick={() => removeItem(item.productId._id)}>Remove</button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </section>

      <aside className="order-summary">
  <div>
    <h2>Order Summary</h2>

    <div className="summary-row">
      <div>Subtotal</div>
      <div>${subtotal.toFixed(2)}</div>
    </div>

    <div className="summary-row">
      <div>Shipping</div>
      <div>${shippingFee.toFixed(2)}</div>
    </div>

    <div className="summary-row">
      <div>Tax (18%)</div>
      <div>${tax.toFixed(2)}</div>
    </div>

    <div className="summary-row total">
      <div><strong>Total</strong></div>
      <div><strong>${total.toFixed(2)}</strong></div>
    </div>
  </div>

  <div>
    <button className="btn-checkout" type="button">Proceed to Checkout</button>
    <button className="btn-continue" type="button">Continue Shopping</button>
  </div>
</aside>
      </div>
    </>
  );
}

export default Cart;
