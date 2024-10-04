// src/testing/testUtils.js

import React from 'react';
import { Provider } from 'react-redux';
import { store } from 'src/store/store'; // Ajusta la ruta según tu estructura de carpetas
import { render } from '@testing-library/react';

// Función para renderizar con el Provider de Redux
export const renderWithProvider = (ui, { initialState, store = createStore(rootReducer, initialState) } = {}) => {
  return render(<Provider store={store}>{ui}</Provider>);
};
