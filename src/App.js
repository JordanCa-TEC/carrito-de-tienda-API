/*---------
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
----------*/

import React from 'react';
import { Provider } from 'react-redux';
import store from './store/store';
import ProductList from './store/ProductList';
import Cart from './store/Cart';
import './App.css'; // Asegúrate de importar los estilos

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

