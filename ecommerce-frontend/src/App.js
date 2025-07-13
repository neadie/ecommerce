import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import OrderHistory from './pages/OrderHistory';
import Success from './pages/Success';
import Navbar from './components/Navbar';

const App = () => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(i => i.id === item.id);
      if (existingItem) {
        return prevItems.map(i =>
          i.id === item.id ? { ...i, quantity: i.quantity + item.quantity } : i
        );
      }
      return [...prevItems, item];
    });
  };

  const removeItem = (id) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== id));
  };

  const updateQuantity = (id, quantity) => {
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === id ? { ...item, quantity } : item
      )
    );
  };

  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" render={(props) => (
          <Home {...props} addToCart={addToCart} />
        )} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route
          path="/cart"
          render={(props) => (
            <Cart
              {...props}
              items={cartItems}
              removeItem={removeItem}
              updateQuantity={updateQuantity}
            />
          )}
        />
        <Route
          path="/checkout"
          render={(props) => <Checkout {...props} items={cartItems} />}
        />
        <Route path="/orders" component={OrderHistory} />
        <Route path="/success" component={Success} />
      </Switch>
    </Router>
  );
};

export default App;
