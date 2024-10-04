// src/reducers/rootReducer.js
import { combineReducers } from 'redux';
import cartReducer from './cartReducer'; // Asegúrate de que esta ruta sea correcta

const rootReducer = combineReducers({
  cart: cartReducer, // Asegúrate de que 'cart' coincida con la estructura de tu estado
  // otros reducers si los tienes
});

export default rootReducer;
