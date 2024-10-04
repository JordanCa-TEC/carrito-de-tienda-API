import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from '../path/to/your/rootReducer'; // Asegúrate de importar tu reducer raíz
import Cart from '../components/Cart';

const renderWithProvider = (component) => {
  const store = createStore(rootReducer);
  return render(<Provider store={store}>{component}</Provider>);
};

test('renders Cart component with empty message', () => {
  renderWithProvider(<Cart />);
  const messageElement = screen.getByText(/Your cart is empty/i);
  expect(messageElement).toBeInTheDocument();
});
