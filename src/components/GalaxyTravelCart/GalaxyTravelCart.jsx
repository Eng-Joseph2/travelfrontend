import React, { useContext } from "react";
import styles from "./GalaxyTravelCart.module.css";
import CartContext from "../../store/CartContext/CartContext";
import axios from "axios";

const GalaxyTravelCart = () => {
  const ctxCart = useContext(CartContext);

  console.log(ctxCart.Cart);
  // (ctxCart.Cart)

  console.log(ctxCart.Cart);

  const TotolPrice = ctxCart.Cart.reduce((initial,trip) => {
    return initial + trip.price
  },0)


  const Discount = 500

  console.log(TotolPrice);


  const HandleData = (ObjectCartData) => {
    console.log(ObjectCartData, 'waa pass gareeye '); 
    axios.post('http://localhost:9007/user',ObjectCartData)
  }

  const onSubmitCart = () => {
    ctxCart.Cart.map((obj) => {
      return HandleData(obj)
    })
  }
  
  
  return (
    <div className={styles.cartContainer}>
      <h1 className={styles.title}>Galaxy Travel Cart</h1>
      <div className={styles.cartContent}>
        <div className={styles.cartItems}>
          {ctxCart.Cart.map((trip) => {
            return (
              <div className={styles.cartItem}>
                <img
                  src={trip.image}
                  alt="Mars Trip"
                  className={styles.itemImage}
                />
                <div className={styles.itemDetails}>
                  <h2 className={styles.itemName}>{trip.price - 200}$</h2>
                  <p className={styles.itemPrice}>{trip.price}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div className={styles.summary}>
          <h2>Order Summary</h2>
          <p>Subtotal: {TotolPrice}$</p>
          <p>Discount: {Discount}$</p>
          <div className={styles.totalRow}>
            <h3>{TotolPrice - Discount }$</h3>
          </div>
          <button onClick={onSubmitCart} className={styles.checkoutButton}>Proceed to Checkout</button>
        </div>
      </div>
    </div>
  );
};

export default GalaxyTravelCart;
