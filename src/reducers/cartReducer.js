// src/reducers/cartReducer.js
const initialState = {
    items: [],
    total: 0,
  };
  
  const cartReducer = (state = initialState, action) => {
    switch (action.type) {
      // Maneja las acciones según tus necesidades
      case 'ADD_TO_CART':
        return {
          ...state,
          items: [...state.items, action.payload],
          total: state.total + action.payload.price,
        };
      case 'REMOVE_FROM_CART':
        const updatedItems = state.items.filter(item => item.id !== action.payload.id);
        return {
          ...state,
          items: updatedItems,
          total: state.total - action.payload.price,
        };
      default:
        return state;
    }
  };
  
  export default cartReducer;
  