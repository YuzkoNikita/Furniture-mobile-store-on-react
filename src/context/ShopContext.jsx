/* eslint-disable react/prop-types */
import { createContext, useContext, useState } from "react";
import products from "../assets/products.json";

export const ShopContext = createContext(null);
export const useCart = () => useContext(ShopContext);

const ShopContextProvaider = (props) => {
  const [cartItems, setCartItems] = useState([]);

  const removeItemFromCart = (id) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== id));
  };
  
  const addToCart = (item) => {
    let isInArray = cartItems.some(el => el.id === item.id);

    if (!isInArray)
      setCartItems((prevItems) => [...prevItems, item ]);
  }

  const contextValue = {products, cartItems, addToCart, removeItemFromCart, setCartItems};
  return (
    <ShopContext.Provider value={contextValue}>
        {props.children}
    </ShopContext.Provider>
  )
}

export default ShopContextProvaider;
