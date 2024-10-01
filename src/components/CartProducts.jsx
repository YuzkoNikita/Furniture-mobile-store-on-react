import { useEffect, useState } from "react";
import { useCart } from "../context/ShopContext";
import CardCartItem from "./CardCartItem";

// eslint-disable-next-line react/prop-types
const CartProducts = () => {
  const { cartItems, setCartItems, removeItemFromCart } = useCart();
  const [totalPrice, setTotalPrice] = useState(0);

  const updateItemQuantity = (id, newQuantity) => {
    const updatedCart = cartItems.map((item) =>
      item.id === id ? { ...item, quantity: newQuantity } : item
    );
    setCartItems(updatedCart);
  };

  const clearCart = () => {
    setCartItems([]); // Set the cart to an empty array
  };


  useEffect(() => {
    const newTotal = cartItems.reduce((acc, el) => acc + el.price * el.quantity, 0);
    setTotalPrice(newTotal);
  }, [cartItems]); // Recalculate total price when cartItems change

  const showOrders = () => {
    return (
      <div> {cartItems.map((item) => (
        <CardCartItem key={item.id} item={item} removeItemFromCart={removeItemFromCart}
        updateItemQuantity={updateItemQuantity}/> ))}
      </div>
    )
  }
  
  const showNothing = () => {
    return (
      <p className="cart-status">Корзина пуста</p>
    )
  }

  return (
    <div className="cart-products container">
      <div className="cart-header">
        <div className="cart-label">
          <label className="label-wrapper">
            <input type="checkbox" />
            <span className="checkmark"></span>
          </label>
          Select all
        </div>
        <button className="clear-button" onClick={clearCart}>Clear</button>
      </div>
      
      <div className="cart-products-data">
        {cartItems.length > 0 ?  showOrders() : showNothing()}
      </div>

      <div className="cart-footer container grid">
        <div className="cart-footer-wrapper">
          <div>
            <p>Total:</p>
            <b>$ {totalPrice.toFixed(2)}</b>
          </div>
          <button className="button-main">Checkout</button>
        </div>

        <span></span>
      </div>
    </div>
  );
};

export default CartProducts;
