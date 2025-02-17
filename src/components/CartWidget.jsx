import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';  // Utilizando react-icons para el ícono

function CartWidget() {
  const cartItems = 5;  // Número hardcodeado de elementos en el carrito

  return (
    <div className="cart-widget d-flex align-items-center">
      <FaShoppingCart size={24} />  {/* Ícono del carrito */}
      <span className="badge bg-danger ms-2">{cartItems}</span>  {/* Notificación con número */}
    </div>
  );
}

export default CartWidget;
