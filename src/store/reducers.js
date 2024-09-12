const productsReducer = (state = [], action) => {
  return state; // El estado de los productos no cambia
};

const cartReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return [...state, action.payload]; // Agrega el producto al carrito
    case 'REMOVE_FROM_CART':
      return state.filter(item => item.id !== action.payload.id); // Elimina el producto del carrito
    default:
      return state;
  }
};

export { productsReducer, cartReducer };

