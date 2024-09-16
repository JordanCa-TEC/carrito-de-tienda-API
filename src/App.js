import React from 'react';
import { Provider } from 'react-redux';
import store from './store/store';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>E-commerce App</h1>
        <ProductList />
        <Cart />
      </div>
    </Provider>
  );
}

export default App;

