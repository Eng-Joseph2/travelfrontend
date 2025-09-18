import React, { useState } from "react";
import "./CheckoutPage.css"; // import css

const CheckoutPage = () => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", ticket: 1 });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:9007/user", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await response.json();
      alert("✅ Checkout successful!");
      localStorage.removeItem("cartItems"); 
    } catch (error) {
      console.error(error);
      alert("Something went wrong during checkout");
    }
  };

  return (
    <div className="checkout-container">
      <h2>Checkout</h2>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input type="text" name="name" value={form.name} onChange={handleChange} required />

        <label>Email:</label>
        <input type="email" name="email" value={form.email} onChange={handleChange} required />

        <label>Phone:</label>
        <input type="text" name="phone" value={form.phone} onChange={handleChange} required />

        <label>Tickets:</label>
        <input type="number" name="ticket" value={form.ticket} onChange={handleChange} min="1" required />

        <button type="submit">Confirm Order</button>
      </form>
    </div>
  );
};

export default CheckoutPage;
