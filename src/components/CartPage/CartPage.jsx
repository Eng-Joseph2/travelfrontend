import React, { useState, useEffect } from "react";
import "./CartPage.css";

const CartPage = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const storedCart = localStorage.getItem("cartItems");
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, []);

  // Remove item
  const removeFromCart = (index) => {
    const updatedCart = cart.filter((_, i) => i !== index);
    setCart(updatedCart);
    localStorage.setItem("cartItems", JSON.stringify(updatedCart));
  };

  // Clear cart
  const clearCart = () => {
    setCart([]);
    localStorage.removeItem("cartItems");
  };

  // Calculate total
  const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="cart-container">
      <h2>🛒 Your Cart</h2>
      {cart.length === 0 ? (
        <p className="empty">Cart is empty.</p>
      ) : (
        <>
          <table className="cart-table">
            <thead>
              <tr>
                <th>#</th>
                <th>Image</th>
                <th>Country</th>
                <th>Price</th>
                <th>❌</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>
                    <img
                      src={`http://localhost:9007/iamges/${item.Bimage}`}
                      alt={item.name}
                      className="cart-img"
                    />
                  </td>
                  <td>{item.location}</td>
                  <td>${item.price}</td>
                  <td>
                    <button
                      className="remove-btn"
                      onClick={() => removeFromCart(index)}
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="cart-footer">
            <h3>Total: ${totalPrice}</h3>
            <button className="clear-btn" onClick={clearCart}>
              Clear Cart
            </button>
            <button className="checkout-btn">Checkout</button>
          </div>
        </>
      )}
    </div>
  );
};

export default CartPage;
