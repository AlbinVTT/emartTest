
import React from 'react';
import { useNavigate } from 'react-router-dom';

function Cart({ cartItems, onCheckout }) {
  const navigate = useNavigate();
  const total = cartItems.reduce((sum, item) => sum + item.price, 0);

  const handleCheckout = () => {
    onCheckout();
    navigate('/confirmation');
  };

  return (
    <div className="App">
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Cart is empty</p>
      ) : (
        <>
          {cartItems.map((item, index) => (
            <div key={index}>
              {item.name} - ${item.price}
            </div>
          ))}
          <h3>Total: ${total}</h3>
          <button onClick={handleCheckout}>Checkout</button>
        </>
      )}
    </div>
  );
}

export default Cart;
