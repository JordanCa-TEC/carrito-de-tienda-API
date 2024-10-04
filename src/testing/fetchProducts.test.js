import { fetchProducts } from './fetchProducts';

test('fetches products successfully from API', async () => {
  const mockResponse = [{ id: 1, title: 'Product 1' }];
  global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () => Promise.resolve(mockResponse),
    })
  );

  const products = await fetchProducts();
  expect(products).toEqual(mockResponse);
  expect(fetch).toHaveBeenCalledTimes(1);
});
