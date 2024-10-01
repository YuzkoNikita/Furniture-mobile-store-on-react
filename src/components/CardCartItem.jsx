// eslint-disable-next-line react/prop-types
export default function CardCartItem({item, removeItemFromCart, updateItemQuantity}) {
  // eslint-disable-next-line react/prop-types
  const { id, title, price, imageInCart, category, quantity } = item;

  const handleIncrement = () => {
    updateItemQuantity(id, quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      updateItemQuantity(id, quantity - 1);
    } else {
      handleRemoveItem();
    }
  };

  const handleRemoveItem = () => {
    removeItemFromCart(id);
  };

  return (
    <div className="cart-item">
      <div className="cart-item-label">
        <label className="label-wrapper">
          <input type="checkbox"/>
          <span className="checkmark"></span>
        </label>
        <img src={imageInCart} alt={title} className="item-image" />
      </div>

      <div className="item-info">
        <div>
          <span>
            <h3>{title}</h3>
            <p>${price}</p>
          </span>
          <p>{category}</p>          
        </div>

        <div className="quantity-control">
          <button onClick={handleDecrement}>-</button>
          <span>{quantity}</span>
          <button onClick={handleIncrement}>+</button>
        </div>
      </div>
    </div>
  )
}
