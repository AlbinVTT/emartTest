
import React from 'react';
import { Link } from 'react-router-dom';

function OrderConfirmation({ order }) {
  const total = order.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="App">
      <h2>✅ Order Confirmed!</h2>
      <p>Thank you for your purchase. Here's your order summary:</p>
      {order.map((item, idx) => (
        <div key={idx}>{item.name} - ${item.price}</div>
      ))}
      <h3>Total: ${total}</h3>
      <Link to="/">Back to Products</Link>
    </div>
  );
}

export default OrderConfirmation;
