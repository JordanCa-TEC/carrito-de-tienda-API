// src/testing/Cart.test.js
import React from 'react';
import { renderWithProvider } from './testUtils'; // Asegúrate de que la ruta sea correcta
import Cart from '../components/Cart';

test('renders Cart component with empty message', () => {
  const { getByText } = renderWithProvider(<Cart />);
  expect(getByText(/Tu carrito está vacío/i)).toBeInTheDocument();
});
