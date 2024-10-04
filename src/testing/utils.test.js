import { calculateTotal } from './utils';

test('calculates total correctly', () => {
  const items = [{ price: 10 }, { price: 20 }];
  const result = calculateTotal(items);
  expect(result).toBe(30);
});
