// src/testing/utils.test.js
import { calculateTotal } from './testUtils';

test('calculates total correctly', () => {
  const items = [{ price: 10 }, { price: 20 }];
  const total = calculateTotal(items);
  expect(total).toBe(30);
});


// src/testing/testUtils.js
import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from '../reducers/rootReducer';

const renderWithProvider = (component) => {
  const store = createStore(rootReducer);
  return render(<Provider store={store}>{component}</Provider>);
};

export { renderWithProvider };
