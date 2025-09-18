import React from 'react'
import CartContext from './CartContext'
import { useState } from 'react'
import image from '../../Assets/imag2.png.png'
const CartProvider = (props) => {

    const cartList = [
      
    ]

    const [cart, setCart] = useState(cartList)

    const CartChangeHandler = (newItem) => {
      setCart(prev => [...prev, newItem])
    }

  return (
    <>
        <CartContext.Provider value={{Cart : cart, CartChangeHandler}}>
            {props.children}
        </CartContext.Provider>
    </>
  )
}

export default CartProvider