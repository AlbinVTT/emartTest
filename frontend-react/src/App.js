
import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import ProductList from './ProductList';
import Cart from './Cart';
import OrderConfirmation from './OrderConfirmation';

function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [cart, setCart] = useState([]);
  const [order, setOrder] = useState([]);
  const [error, setError] = useState('');

  const login = () => {
    if (username === 'testuser' && password === 'password123') {
      setIsLoggedIn(true);
      setError('');
    } else {
      setError('❌ Invalid username or password');
    }
  };

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const handleCheckout = () => {
    setOrder(cart);
    setCart([]);
  };

  return (
    <Router>
      <div className="App">
        {!isLoggedIn ? (
          <>
            <h2>eMart Login</h2>
            <input
              type="text"
              placeholder="Enter your username"
              value={username}
              onChange={e => setUsername(e.target.value)}
            />
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
            <button onClick={login}>Login</button>
            {error && <p>{error}</p>}
          </>
        ) : (
          <>
            <nav style={{ marginBottom: '1rem' }}>
              <Link to="/" style={{ marginRight: '1rem' }}>Products</Link>
              <Link to="/cart">Cart ({cart.length})</Link>
            </nav>
            <Routes>
              <Route path="/" element={<ProductList onAddToCart={addToCart} />} />
              <Route path="/cart" element={<Cart cartItems={cart} onCheckout={handleCheckout} />} />
              <Route path="/confirmation" element={<OrderConfirmation order={order} />} />
            </Routes>
          </>
        )}
      </div>
    </Router>
  );
}

export default App;
