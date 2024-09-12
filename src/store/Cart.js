import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart } from './actions';

function Cart() {
  const cart = useSelector(state => state.cart); // Accede al carrito desde el estado
  const dispatch = useDispatch();

  // Calcula el total del carrito
  const totalPrice = cart.reduce((total, item) => total + item.price, 0);

  const handleRemoveFromCart = (product) => {
    dispatch(removeFromCart(product));
  };

  return (
    <div>
      <h2>Carrito de Compras</h2>
      {cart.length === 0 ? (
        <p>Tu carrito está vacío</p>
      ) : (
        <div>
          <ul>
            {cart.map((item, index) => (
              <li key={index}>
                {item.name} - ${item.price}
                <button onClick={() => handleRemoveFromCart(item)}>Quitar del carrito</button>
              </li>
            ))}
          </ul>
          <h3>Total: ${totalPrice}</h3> {/* Muestra el total del carrito */}
        </div>
      )}
    </div>
  );
}

export default Cart;

