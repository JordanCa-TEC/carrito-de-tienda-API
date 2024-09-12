import { createStore, combineReducers } from 'redux';
import { productsReducer, cartReducer } from './reducers';

// Reducers combinados
const rootReducer = combineReducers({
  products: productsReducer,
  cart: cartReducer,
});

// Estado inicial para los productos
const initialProducts = [
  { id: 1, name: 'Producto 1', price: 100 },
  { id: 2, name: 'Producto 2', price: 150 },
  { id: 3, name: 'Producto 3', price: 200 },
];

// Crea la tienda de Redux con el estado inicial
const store = createStore(
  rootReducer,
  { products: initialProducts, cart: [] }
);

export default store;
