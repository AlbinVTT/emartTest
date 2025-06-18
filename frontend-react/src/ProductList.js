
import React from 'react';

const mockProducts = [
  { id: 1, name: 'Laptop', price: 1200 },
  { id: 2, name: 'Headphones', price: 150 },
  { id: 3, name: 'Smartphone', price: 900 }
];

function ProductList({ onAddToCart }) {
  return (
    <div className="App">
      <h2>Product List</h2>
      {mockProducts.map(product => (
        <div key={product.id} style={{ marginBottom: '1rem' }}>
          <strong>{product.name}</strong> - ${product.price}
          <br />
          <button onClick={() => onAddToCart(product)}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
