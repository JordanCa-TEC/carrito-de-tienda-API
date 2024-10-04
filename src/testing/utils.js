// src/testing/utils.js

// Función que calcula el total de un array de items
export const calculateTotal = (items) => {
    return items.reduce((total, item) => total + item.price, 0);
  };

  
  import { calculateTotal } from './utils';

  test('calculates total correctly', () => {
    const items = [{ price: 10 }, { price: 20 }];
    const total = calculateTotal(items);
    expect(total).toBe(30); // Verifica que el total calculado sea 30
  });
  