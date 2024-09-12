import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from './actions'; // Asegúrate de tener las acciones

function ProductList() {
  const products = useSelector(state => state.products); // Acceder a los productos desde el estado
  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  return (
    <div>
      <h2>Productos Disponibles</h2>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            {product.name} - ${product.price}
            <button onClick={() => handleAddToCart(product)}>Agregar al carrito</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductList;
