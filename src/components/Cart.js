import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart } from '../store/slices/cartSlice';

function Cart() {
  const cart = useSelector(state => state.cart.items);
  const total = useSelector(state => state.cart.total);
  const dispatch = useDispatch();

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
                {item.title} - ${item.price}
                <button onClick={() => dispatch(removeFromCart(item))}>Quitar del carrito</button>
              </li>
            ))}
          </ul>
          <h3>Total: ${total}</h3>
        </div>
      )}
    </div>
  );
}

export default Cart;
