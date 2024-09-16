import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../store/slices/productsSlice';
import { addToCart } from '../store/slices/cartSlice';

function ProductList() {
  const dispatch = useDispatch();
  const products = useSelector(state => state.products.items);
  const productStatus = useSelector(state => state.products.status);
  const error = useSelector(state => state.products.error);

  useEffect(() => {
    if (productStatus === 'idle') {
      dispatch(fetchProducts());
    }
  }, [productStatus, dispatch]);

  if (productStatus === 'loading') {
    return <div>Cargando productos...</div>;
  }

  if (productStatus === 'failed') {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h2>Productos Disponibles</h2>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            {product.title} - ${product.price}
            <button onClick={() => dispatch(addToCart(product))}>Agregar al carrito</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductList;
